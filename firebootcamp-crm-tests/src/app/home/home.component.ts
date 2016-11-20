import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fbc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Stevo rocks';

  constructor() { }

  ngOnInit() {
  }

}
