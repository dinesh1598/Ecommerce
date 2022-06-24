import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-earring',
  templateUrl: './earring.component.html',
  styleUrls: ['./earring.component.css']
})
export class EarringComponent implements OnInit {

  constructor() { }
  title="EarRing";
  oldPrice=50000;
  newPrice=45000;

  ngOnInit(): void {
  }

}
