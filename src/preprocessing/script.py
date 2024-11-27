import csv
import json

csv_file = 'pagos.csv' #nombre del archivo a parsear
json_file = 'output2.json' #nombre del archivo parseado

output_data = {}

#abrimos el .csv
with open(csv_file, 'r', encoding='utf-8') as file:
    reader = csv.reader(file, delimiter=';')
    next(reader)  # nos saltamos los headers(los asignaremos manualmente abajo)
    
    for rows in reader:
        row = rows[0].split(',')  #separamos los datos por comas
        email = row[3]
        print(email)
        email_no_quotes = row[3].replace('"', '')
        print(email_no_quotes)
        email_no_slash = email_no_quotes.replace('/', '')
        key = email_no_slash.split('@')[0]  #sacamos la matricula del correo, separandolo en 2: uno antes de la @ y uno despues.
        #remove "'s from the email, please

        output_data[key] = {
            "Nombre": row[0].strip() + " " + row[1].strip() + " " + row[2].strip(),
            "Correo":email_no_slash,
            "Registro de pago por": row[3].strip(),
            "Fecha": row[3].strip()
        }

# escribimos el json
with open(json_file, 'w', encoding='utf-8') as json_out:
    json.dump(output_data, json_out, indent=4, ensure_ascii=False)

print(f"escrito a {json_file}")
