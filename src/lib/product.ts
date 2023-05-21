import { Product } from './interfaces';

// This will act as the foundation for other Product type classes (FoodProduct, SportingProduct)
abstract class ProductBase implements Product {
  
  //auto implemented properties. Same as line 25
  //we can change access type to private so that we cannot do object.property
  constructor(public id: number, public name: string, public icon: string) {}

  validate(): boolean {
    throw new Error('Not implemented');
  }
}

export class FoodProduct extends ProductBase {
  validate(): boolean {
    return !!this.id && !!this.name && !!this.icon;
  }
}

export class SportingGoodsProduct extends ProductBase{
 constructor(id:number,name:string,icon:string){
  super(id,name,icon);
 }
}
class FoodProduct2{
  //Properties
  id=0;
  name='';
  icon='';

  //constructor
  constructor(id:number,name:string,icon:string){
    this.id=id;
    this.name=name;
    this.icon=icon;
  }

  //Function. Function inside the class dont need function keyword
  validate(): boolean {
   return !!this.id && !!this.icon && !!this.name; //check if values are present. We are converting to boolean
  }
}
// let fp=new FoodProduct();
// fp.id=10;
// fp.name='LEMON'

let fp2=new FoodProduct2(20,'jam','jam.jpg');