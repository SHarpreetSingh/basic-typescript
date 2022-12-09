"use strict";
type Point = {
  num:number,
  num1:number
  };
  
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.num);
  console.log("The coordinate's y value is " + pt.num1);
}
  
  printCoord({x1,3});

//   // @errors: 2322
// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";