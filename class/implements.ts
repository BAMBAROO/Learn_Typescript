interface HashName {
    name: string;
}

interface SayHelloToAll {
    sayHello(value:string):string;
}

class SayHi implements HashName,SayHelloToAll {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(name: string): string {
        return `haloo ${name} saya adalah ${this.name}`
    }
}

const wayne: SayHi = new SayHi("wayne")
console.info(wayne.sayHello("hunter"))