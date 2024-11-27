import csv
import json

csv_file = 'pagos.csv' #nombre del archivo a parsear
json_file = 'output2.json' #nombre del archivo parseado

output_data = {}

#abrimos el .csv
with open(csv_file, 'r', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=';')
    next(reader)  #nos saltamos el primer row (que esta vacio)
    next(reader)  # nos saltamos los headers(los asignaremos manualmente abajo)
    
    for row in reader:
        if len(row) < 5 or not row[2]:  #checamos si tiene todos los campos requeridos, y si el campo de correo existe.
            continue
        email = row[2]
        key = email.split('@')[0]  #sacamos la matricula del correo, separandolo en 2: uno antes de la @ y uno despues.
        output_data[key] = {
            "Nombre": row[1].strip() + row[2].strip() + row[3].strip(),
            "Correo": row[4].strip(),
            "Registro de pago por": row[3].strip(),
            "Fecha": row[4].strip()
        }

# escribimos el json
with open(json_file, 'w', encoding='utf-8') as json_out:
    json.dump(output_data, json_out, indent=4, ensure_ascii=False)

print(f"escrito a {json_file}")
