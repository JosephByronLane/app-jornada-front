import { Component } from '@angular/core';
import { MenubarComponent } from "../../components/menubar/menubar.component";
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-volleyball',
  standalone: true,
  imports: [MenubarComponent, TableComponent],
  templateUrl: './volleyball.component.html',
  styleUrl: './volleyball.component.css'
})
export class VolleyballComponent {

}
