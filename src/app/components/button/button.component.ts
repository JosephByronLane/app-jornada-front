import { Component, input, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() link: string = "";
  @Input() text: string = "";
  sportsNameTranslated: string = "";
console: any;

ngOnInit(): void {
  switch(this.text){
    case "Basketball":
      this.sportsNameTranslated = "Basquetbol";
      break;
    case "Beisbol":
      this.sportsNameTranslated = "Beisbol";
      break;
    case "Futbol":
      this.sportsNameTranslated = "Fútbol";
      break;
  }}

  redirect(){
    console.log("Redirecting...");
  }

}
