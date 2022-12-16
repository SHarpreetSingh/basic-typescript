//
interface Reportable {
  summary(): string;
}

// TS desn't care about othan than summary
// const old = {
//   name: "aa",
//   broken: true,
//   year: 2000,
//   summary(): string {
//     return `Name: ${this.name}`
//   }
// };

const old = {
  name: "aa",
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const printSummary = (item: Reportable): void => {
  //
  console.log(`Summary ${item.summary()}`);
};

printSummary(old);
