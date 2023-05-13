var f_name = "dee"; //type inference ..infers the type based in the value
//let f_name:string='dee' no need like this as it infers automatically
//f_name=null  will give error based on the TS config you have. If null is allowed
//if type checking is strict, it wont allow. Thus we can use union type here
var lName;
var personAge;
personAge = 45;
var hasNotPurchased = true;
var flowerName = ['tulips', 'cherry blossom', 'sunflower'];
var quantity = [1, 2, 3, 5];
quantity.push(100);
var farray = []; //this is an any array ~ let farray:any[]=[];
//incase of empty error thus its difficult to infer the data type if we initilize with empty array
//Hence, give the data type
console.log(f_name, lName, personAge, hasNotPurchased, flowerName, quantity);
var iceCream;
(function (iceCream) {
    iceCream[iceCream["choco"] = 0] = "choco";
    iceCream[iceCream["vanilla"] = 90] = "vanilla";
    iceCream[iceCream["fudge"] = 91] = "fudge";
})(iceCream || (iceCream = {}));
var userChoice = iceCream.choco;
if (userChoice === iceCream.choco) {
    console.log('Choco flavour selected');
}
var newice = 2 /* newIceCream.fudge */; // in JS this is will store the exact value and not convert it to function
// let newice=3 /* fudge*/     makes the calculation faster but we cannot get the string associated
