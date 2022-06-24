import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bracelet',
  templateUrl: './bracelet.component.html',
  styleUrls: ['./bracelet.component.css']
})
export class BraceletComponent implements OnInit {

  constructor() { }
  oldPrice=49000;
  newPrice=35999;

  ngOnInit(): void {
  }

}
