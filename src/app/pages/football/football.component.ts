import { Component } from '@angular/core';
import { MenubarComponent } from "../../components/menubar/menubar.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [MenubarComponent, TableComponent],
  templateUrl: './football.component.html',
  styleUrl: './football.component.css'
})
export class FootballComponent {

}
