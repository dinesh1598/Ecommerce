import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.css']
})
export class RingsComponent implements OnInit {

  constructor() { }
  oldPrice=29000;
  newPrice=25000;

  ngOnInit(): void {
  }

}
