import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { InitialLoadingComponent } from "./components/initial-loading/initial-loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, InitialLoadingComponent, ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit() {

  }


  title = 'app-jornada-front';
}
