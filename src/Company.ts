import { faker } from "@faker-js/faker";

export class Company {
  comapnyName: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.comapnyName = faker.company.name();
    // this.catchPharse = faker.company.name();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
