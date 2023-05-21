export interface Product {
  id: number;
  name: string;
  icon: string;
  description?: string;
  validate(): boolean;
 // placeOrder(id:number):boolean //fuction in interface
}

// let product2:Product={
//   id:12,
//   name:'Product',
//   icon:'sample.jpg',
// }

// Examples of using a type alias
type ProductAlias =
  | string
  | number
  | {
      id: number;
      name: string;
      icon: string;
      description?: string;
    };

let product: ProductAlias = 'Food';

// Using a type alias versus an enum
enum ProductType {
  Sporting,
  Home,
}

type ProductTypeList = 'SPORTING' | 'HOME'; //string literal type
let p: ProductTypeList = 'SPORTING';
