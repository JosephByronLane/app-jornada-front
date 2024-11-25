import { Component, inject, OnInit } from '@angular/core';
import { Database, ref, set, onValue } from '@angular/fire/database';
import { Observable, BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { InitialLoadingComponent } from "./components/initial-loading/initial-loading.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableComponent, InitialLoadingComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private database = inject(Database); // Use modular Database
  data$: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  ngOnInit() {
    this.getData();
    this.insertData();
  }

  insertData() {
    const data = require('../preprocessing/teamstest.json');
    const dataRef = ref(this.database, '/Basketball'); 
    set(dataRef, data).catch((error) =>
      console.error('Error inserting data:', error)
    );
  }

  getData() {
    const dataRef = ref(this.database, '/Alumnos');
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      this.data$.next(data ? Object.entries(data) : []);
    });
  }

  title = 'app-jornada-front';
}
