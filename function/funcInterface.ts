export interface add {
    (value1: number, value2: number): number
}
const addNumber: add = (value1:number, value2: number): number => {
    return value1 + value2
}

function sayHello(name?:string): string {
    if (name) {
        return `halooo ${name}`
    } else {
        return "haloo saja"
    }
}

console.log(sayHello())
