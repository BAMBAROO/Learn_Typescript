import {Person} from "./person";

interface HeroType {
    (name:string,age:number,power:string): object
}

interface Man {
    name: string,
    age: number,
    power: string
}

interface Costum {
    mask: string,
    cap: string,
    armor: string
}

const createHero: HeroType = (name: string, age: number, power:string): object => {
    return {
        name: name,
        age: age,
        power: power
    }
}

const Batman: Man & Costum = {
    name: "Bruce Wayne",
    age: 32,
    power: "money",
    mask: "black mask",
    cap: "black cap",
    armor: "black anti bullet"
}

const bryan: object = createHero("bryan", 19, "money")
// console.log(bryan, " by object")
// console.log(createHero("bryan", 19, "money"), " by function")

function menghindar(a: number, b: number) : void {
    const hasil = a + b;
    console.log(hasil)
}
// menghindar(2,3)

// menjadikan kode dibawah ini seperti type yang ada pada file Person.ts

const person: any = {
    name: "bryan",
    age: 19
}

const person2: Person = person as Person
console.info(person2)
