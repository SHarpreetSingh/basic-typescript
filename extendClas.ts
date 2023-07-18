class Drike {
  drive(): void {
    console.log("chug chug");
  }

  Hook(): void {
    console.log("beep");
  }
}

class Car extends Drike {
  //
}

const car = new Car();
car.Hook()
car.drive()


// class Drve{
//   drive():void{
//     console.log("chug chug")
//   }
//   horn():void{
//     console.log("peep ppeee")

//   }
// }

// class Car extends Drve{

// }

// const car = new Car();
// car.drive()
// car.horn()