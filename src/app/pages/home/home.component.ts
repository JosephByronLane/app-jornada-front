import { Component } from '@angular/core';
import { MenubarComponent } from "../../components/menubar/menubar.component";
import { ButtonComponent } from "../../components/button/button.component";
import { SeparatorComponent } from "../../components/separator/separator.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MenubarComponent, ButtonComponent, SeparatorComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
