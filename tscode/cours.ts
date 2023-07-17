console.log("HW");
//ezrezrezrze
let i: number = 1;
//i = "a";

let largeNumber: number = 999_999_999; //999999999 -> faciliter la lecture
console.log(largeNumber);

//any
let quelquechose;
quelquechose = 1;
quelquechose = "a"; 

function printData(info : any){
    console.log(info);
}
printData("1");
printData(1);

/*
mauvaise pratique
//any implicite
function div(a, b){
    console.log(a/b);
}
//any explicite
function div(a : any, b : any){
    console.log(a/b);
}
*/


function div(a : number, b : number){
    console.log(a/b);
}

div(1,2);
//div("a", "b");


function divWithReturn(a : number, b : number){
    return a+b;
}

//array
let infoString: string[] = ["a", "b", "c"];
let infoString2 = ["a", "b", "c"];
let infoString3 : string[];

let arrayAny: any[] = [1, "a"];

let dataTuple: [number, string] = [4, "quatre"];
//console.log(dataTuple.keys.toString);
dataTuple.push(4);


//enums
enum day {Lundi = "monday", Mardi = "Tuesday"};

let d = new Date();
d.getDay
console.log(d);

