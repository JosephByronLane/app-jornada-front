import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Database, ref, set, onValue, get } from '@angular/fire/database';
import { sportsEntry } from '../../interfaces/sportsEntry';
import { SeparatorComponent } from "../separator/separator.component";
@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, SeparatorComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  allowedSports = ["Basketball", "Voleyball", "Futbol"]
  @Input() sport: string | null = null;
  isValidSports :Boolean = false;
  fetchedData: sportsEntry[] = [];
  dataArray: sportsEntry[] = [];
  studentKey: number = 0;
  isDataLoaded:Boolean = true;
  constructor(private db: Database){
  }
  ngOnInit(): void {
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



