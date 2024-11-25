import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-loading',
  standalone: true,
  imports: [],
  templateUrl: './initial-loading.component.html',
  styleUrl: './initial-loading.component.css'
})
export class InitialLoadingComponent implements OnInit {

  root: HTMLElement = document.getElementById("root") as HTMLElement;
//adds disabled css class to root html element after 2 seconds

  ngOnInit() {
    setTimeout(() => {
      if (this.root === null) {
        this.root = document.getElementById("root") as HTMLElement;
      }
      this.root.classList.add("disabled");
    }, 1000);
  }
}
