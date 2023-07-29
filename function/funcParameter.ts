function sayHello(name: string, callback: (name: string) =>  string) : string {
    return callback(name)
};

function capitalize (name: string): string {
    return name.toUpperCase()
};

function timesTwo(value: number, callback: (value: number) => number): number {
    return callback(value)
};

function double(value:number): number {
    return value * 2
};

function unCapitalize(name:string, callback:(value:string) => string):string {
    return callback(name)
}

const lower = unCapitalize("LONDON", function(value: string): string {
    return value.toLowerCase()
})

console.info(lower)

const functionString: string = sayHello("bryan", capitalize);
console.info(functionString);
const functionNumber: number = timesTwo(88, double);
console.info(functionNumber);