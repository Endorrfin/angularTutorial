import { Component, OnInit } from '@angular/core';


// DATA OF TYPE
// const tsNumber: number;
// const tsString: string;
// const tsBoolean: boolean;
// const tsAny: any;
//
// const tsNumberArray: number[];
// const tsAnyArray: any[];

// tsEnumArray [red, blue, green]: enum;
// tsEnumObject { red=1, blue=2, green=3 }

// const getData = this.data.

// ============== INTERFACE ==========================
// Это типа тип данных, который мы сами создаем.
// interface Point {
//   x:number,
//   y:number
// }
//
// let drawLine = (x,y, q,z) => {
//
// }

// le drawLineProper = (x:Point, y:Point) => {
//
// }


// ============== CLASSES ==========================
// class Coordinate {
//   x: number;
//   y: number
// }
//
// constructor(x?:number, y?:number)
// {
//   this.x=x;
//   this.y=y;
// }
//
// constructor(public x?:number, public y?:number) {
//
// }
//
// get X() {
//   return this.x;
// }
//
// set X(value) {
//   this.x=value;
// }
//
// // create method draw
// draw() {
//
// }
//
// // create method calc
// calc(a:Coordinate, b:Coordinate, c:Coordinate) {
//
// }



@Component({
  selector: 'app-type-script',
  templateUrl: './type-script.component.html',
  styleUrls: ['./type-script.component.css']
})
export class TypeScriptComponent implements OnInit {
  public data = 'webAtomAngular';

  constructor() { }

  ngOnInit(): void {
  }



}
