// string, number, boolean, array, undefined, null, any, void, union(where variable can be 1 or more types)
//variable : type --> syntax

let firstName: string | null;
firstName = 'Dan';

let age: number;
age = 45;

let hasPurchased = true;

let productNames: string[] = [];
productNames.push('Basketball');

let petCount: number[] = [];
petCount.push(5);

console.log(firstName, age, hasPurchased, productNames, petCount);

let productType = 'sports'; // homeGoods, grocery ("magic string")
if (productType === 'sports') {
  console.log('Found sports product type.');
}

// Using Enums
enum ProductType {
  Sports, //default 0
  HomeGoods, //default 1
  Groceries, //default 2
}
let pt = ProductType.Sports;
if (pt === ProductType.Sports) {
  console.log('Found sports product type.');
}

let product1: any;
let fname:string|undefined|null; //union type

function log(msg:string): void{} //void return type 
//typescriptlang.org