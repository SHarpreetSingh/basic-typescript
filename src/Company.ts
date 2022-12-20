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
    this.catchPharse = faker.company.name();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
      <h1> Company name: ${this.comapnyName}</h1>
      <h3> Company name: ${this.catchPharse}</h3>
    </div>`;
  }
}
