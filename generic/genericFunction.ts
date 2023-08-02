function genericFuntion<T>(arg:T):T {
    console.log(arg)
    return arg
}

const a = genericFuntion<string>("nama saya bryan")
const b = genericFuntion<number>(898989)
const c = genericFuntion<boolean>(false)

const istrue = <T>(arg:T): {arg: T, is: boolean} =>  {
    if (Array.isArray(arg) && !arg.length) {
        return {arg, is: false}
    }
    if (typeof arg === "string" && !arg.length) {
        return {arg, is: false}
    }
    return {arg, is: true}
}

const result = istrue("")
console.log(result)