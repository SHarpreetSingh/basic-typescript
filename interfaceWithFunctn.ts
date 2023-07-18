//
interface Vehicl {
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

const Printvehicl = (vehObjt: Vehicl):void => {
  //
  console.log(`Summary ${vehObjt.summary()}`)
};

Printvehicl(vehObjt);
