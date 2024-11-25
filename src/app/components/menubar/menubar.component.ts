import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.css'
})
export class MenubarComponent implements OnInit {
  printthing(){
    console.log("Hello");
  }

  ngOnInit(): void {
    console.log("Menubar initialized");
  }
}
