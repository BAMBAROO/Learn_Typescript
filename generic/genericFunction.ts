// SIMPLE GENERIC FUNCTION
// function genericFunction<T>(arg:T):T {
//     console.log(arg)
//     return arg
// }
// const a = genericFunction<string>("nama saya bryan")
// const b = genericFunction<number>(898989)
// const c = genericFunction<boolean>(false)

// GENERIC FUNCTION ADVANCED
// const istrue = <T>(arg:T): {arg: T, is: boolean} =>  {
//     if (Array.isArray(arg) && !arg.length) {
//         return {arg, is: false}
//     }
//     if (typeof arg === "string" && !arg.length) {
//         return {arg, is: false}
//     }
//     if (isObject(arg) && Object.keys(arg as keyof T)) {
//         console.log(arg as keyof T)
//         return {arg, is: false}
//     }
//     return {arg, is: !!arg}
// }
//
// function isObject(value: any): value is object {
//     if(value == null) return false;
//     if (typeof value === "object" && Object.keys(value).length > 0) return true;
//     return false
// }
//
// // const result = istrue({halo: true})
// console.log(istrue({haloo: "nama saya bryan"}))

// MULTIPLE VARIABLE OR PARAMETER
interface HasUsername {
    username: string
}
function multiple <T extends HasUsername, K extends keyof T> (value:T[], key:K): T[K][] {
    return value.map(user => user[key])
}

const monster = [
    {
        username: "monster1",
        age: 100
    },
    {
        username: "monster2",
        age: 200
    }
]

const setelah = multiple(monster, "username")
console.info(setelah)