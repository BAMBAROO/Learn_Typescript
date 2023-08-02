class Penjahat {
    name: string;
    job:string;
    villain: boolean = true;

    constructor(name:string,job:string,villain:boolean) {
        this.name = name;
        this.job = job;
        this.villain = villain
    }

    introduce(name:string = "anonymous"): string {
        return `My name is ${this.name}, My job is to ${this.job}, and I will be there to meet You ${name}`
    }
}

const bruce: Penjahat = new Penjahat("bryan", "robbing", true)
console.info(bruce.introduce("hunter"))
