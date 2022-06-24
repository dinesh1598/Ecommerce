import { BuiltinType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-necklace',
  templateUrl: './necklace.component.html',
  styleUrls: ['./necklace.component.css']
})
export class NecklaceComponent implements OnInit {

  constructor() { }
  title="Necklace";
  oldPrice=12000;
  newPrice=9000;

  ngOnInit(): void {


  }

}
