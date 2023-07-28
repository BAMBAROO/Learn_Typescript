interface HeroType {
    (name:string,age:number,power:string): object
}

type SuperHero = {
    name: string,
    age: number,
    power: string
}
const createHero: HeroType = (name: string, age: number, power:string): object => {
    return {
        name: name,
        age: age,
        power: power
    }
}

const bryan: object = createHero("bryan", 19, "money")
console.log(bryan, " by object")
console.log(createHero("bryan", 19, "money"), " by function")

function menghindar(a: number, b: number) : void {
    const hasil = a + b;
    console.log(hasil)
}
menghindar(2,3)