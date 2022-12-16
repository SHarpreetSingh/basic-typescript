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