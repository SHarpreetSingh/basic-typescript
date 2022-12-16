//
interface Vehicle {
  name: string;
  broken: boolean;
  year: number;
}

// it gives error for not assing string to number
// const vehObj = {
//   name: "aa",
//   broken: true,
//   year: "2000",
// };

const vehObj = {
  name: "aa",
  broken: true,
  year: 2000,
};

const Printvehicle = (vehObj: Vehicle):void => {
  //
  console.log(`Name ${vehObj.name}`)
};

Printvehicle(vehObj);
