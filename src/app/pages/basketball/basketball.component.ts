import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenubarComponent } from '../../components/menubar/menubar.component';
import { TableComponent } from '../../components/table/table.component';
import { SeparatorComponent } from "../../components/separator/separator.component";

@Component({
  selector: 'app-basketball',
  standalone: true,
  imports: [CommonModule, MenubarComponent, TableComponent, SeparatorComponent],
  templateUrl: './basketball.component.html',
  styleUrl: './basketball.component.css'
})
export class BasketballComponent {

}
