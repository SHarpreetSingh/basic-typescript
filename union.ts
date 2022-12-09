// @errors: 2345
function printId(id: number | string) {
  console.log("Your ID is: " + id);
 const Did= typeof id === "number" ? id : id.toUpperCase();
}
// OK
printId(101);
// OK
printId("202");
// Error
printId("22342");