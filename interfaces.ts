// interface Vehicle {
//   name: string;
//   year: Date;
//   broken: boolean;
//   summary(): string;
// }
// It doesn’t matter if we have additional properties, it just checks to see if it has the list of properties in the interface at minimum
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

// const printVehicle = (vehicle: { name: string; year: number; broken: boolean; }): void => {
// const printVehicle = (vehicle: Vehicle): void => {
// const printVehicle = (vehicle: Reportable): void => {
const printSummary = (item: Reportable): void => {
  // console.log(`Name: ${vehicle.name}`);
  // console.log(`Year: ${vehicle.year}`);
  // console.log(`Broken: ${vehicle.broken}`);
  console.log(item.summary);
}

// printVehicle(oldCivic);
printSummary(oldCivic);