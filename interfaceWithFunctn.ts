//
interface Vehicle {
  summary():string
}


const vehObjt = {
  name: "aa",
  broken: true,
  year: 2000,
  summary(): string {
    return `Name: ${this.name}` 
  }
};

const Printvehicl = (vehObjt: Vehicle):void => {
  //
  console.log(`Summary ${vehObjt.summary()}`)
};

Printvehicle(vehObjt);
