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


/*
function add2 (a: number, b?: number) : number{
	return a +  (b || 2 //astuce JS à éviter);
}*/

function add2(a: number, b: number = 2) : number{
    return a + b;
}

console.log(add2(1, 75));


let perso = {name: "truc"};
// perso.age = 94; possible en JS mais pas en TS

let perso2 = {
    name: "truc",
    age: 94
}

let perso3 : {
    name: string,
    age: number
}= {name: "truc", age: 94}

let perso4 : {
    readonly name : string,
    age?: number
 }= {name: "truc"}

// perso4.name = "truc2"; impossible


let perso5 : {
    name: string,
    age: number,
    action: (choice: string) => void
}= {name: "truc", age: 94, action: (choice: string)=>console.log("actions : " + choice)};

perso5.action("blabla");




export class Vehicule{
    static nbRoues: number;
    private /*readonly*/ marque: string;
    
    constructor(nbRoues : number, marque : string){
        nbRoues = nbRoues;
        this.marque = marque;
    }

    public getMarque(): string{
        return this.marque;
    }

    public setMarque(marque: string){
        this.marque = marque;
    }
   /* addAttribut(truc: string){
        this.truc = truc;
    }*/
}
export class Voiture extends Vehicule{}

let vehicules: Vehicule[] = [];


vehicules.push(new Voiture(4, "toyota"));
vehicules.push(new Voiture(4, "renault"));
console.log(vehicules);

let v1 = new Voiture(4, "MarqueV1");
let v2 = new Voiture(2, "Mar queV2");
console.log();



/*

let Modele {
    roues : number,
    marque : string
};
let m = new Modele(roues: 2, marque : "yamaha");

let voiture : modele[] = [];*/

