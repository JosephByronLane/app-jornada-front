import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Database, ref, set, onValue, get } from '@angular/fire/database';
import { sportsEntry } from '../../interfaces/sportsEntry';
import { SeparatorComponent } from "../separator/separator.component";
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [SeparatorComponent, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  animations: [
    trigger('rowAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ opacity: 0, transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class TableComponent implements OnInit {
  allowedSports = ["Basketball", "Voleyball", "Futbol"]
  @Input() sport: string | null = null;
  isValidSports :Boolean = false;
  fetchedData: sportsEntry[] = [];
  dataArray: sportsEntry[] = [];
  sportsNameTranslated: String = "";
  isDataLoaded:Boolean = true;
  constructor(private db: Database){
  }
  ngOnInit(): void {
    switch(this.sport){
      case "Basketball":
        this.sportsNameTranslated = "Basquetbol";
        break;
      case "Voleyball":
        this.sportsNameTranslated = "Voleibol";
        break;
      case "Futbol":
        this.sportsNameTranslated = "Fútbol";
        break;
    }


    if(this.sport === null){
      this.isValidSports = false;
      console.error("Sport is required");
      return;
    }
    if(!this.allowedSports.includes(this.sport)){
      this.isValidSports = false;  
      console.error("Sport is not recognized");    
      return;
    }

    this.fetchData();
  }

  fetchData() {
    const sportRef = ref(this.db, `/${this.sport}`);
    onValue(sportRef, (snapshot) => {
      if (!snapshot.exists()) {
        console.log("No data available");
        this.isDataLoaded = true;
        return;
      }
      this.fetchedData = snapshot.val();
      console.log("Data fetched");

      if (this.fetchedData && typeof this.fetchedData === 'object') {
        this.dataArray = Object.entries(this.fetchedData).map(([key, value]) => {
          return { ...value, key: key };
        });

        this.sortData();
        this.isDataLoaded = true;
      } else {
        console.error("Fetched data is not an object");
        this.isDataLoaded = true;
      }
    }, (error) => {
      console.error("Error fetching data:", error);
      this.isDataLoaded = true;
    });
  }

  sortData(){
    this.dataArray.sort((a, b) => {
        if (a.score > b.score) {
            return -1;
        }
        if (a.score < b.score) {
            return 1;
        }
        return 0;
      });


    this.dataArray.slice(0, 15);
  }

}



