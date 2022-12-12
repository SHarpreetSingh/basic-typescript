"use strict";
type Point = {
  x: number;
  y: number;
};
  
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
  
  printCoord({ x: 100, y: 100 });

//   // @errors: 2322
// let x: "hello" = "hello";
// // OK
// x = "hello";
// // ...
// x = "howdy";