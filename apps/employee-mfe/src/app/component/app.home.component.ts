import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  template: `
     <h1>This is Home Component</h1>
  `
})

export class HomeComponent implements OnInit {
  constructor() {
    console.log()
  }

  ngOnInit() {
    console.log()
  }
}
