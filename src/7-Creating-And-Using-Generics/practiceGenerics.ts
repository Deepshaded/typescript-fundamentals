runGenericsSamples();

export async function runGenericsSamples() {
 
    function giveNumber(arg:number):number{
        return arg;
    }

    console.log(`## Generics overview code`)
    console.log(giveNumber(1001));

    function giveString(arg:string):string{
        return arg;
    }

    console.log(`##Generics String msg`)
    console.log(giveString('sample msg'));

    function giveAny(arg:any):any{
        return arg;
    }

    console.log(`##Generics Any type`)
    console.log(giveAny('any msg'));
    console.log(giveAny(123));

    function giveTyped<T>(arg: T):T{
        return arg;
    }

    let n:number=giveTyped<number>(11);
    let s:string=giveTyped<string>('generic string');
    let b:boolean=giveTyped<boolean>(true);
    console.log(`## Function using generics`)
    console.log(n,s,b);

}