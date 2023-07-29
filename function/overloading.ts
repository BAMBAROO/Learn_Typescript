function overloading(value:string):string;
function overloading(value:number):number;
function overloading(value:any) {
    if (typeof value === "string") {
        return `haloo ${value}`
    } else {
        return value + 10
    }
}
const hasil = overloading(12000)
console.log(hasil)