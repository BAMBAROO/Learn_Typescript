class First {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age
    }
}

class Second extends First {
    job: string;

    constructor(name:string, age:number, job:string) {
        super(name, age);
        this.job = job
    }
}

class Third extends Second {
    gender?: "male" | "female";

    constructor(name: string, age: number, job: string, gender: "male" | "female" = "female") {
        super(name,age,job);
        this.gender = gender
    }
}

const someone = new Third("bruce", 19, "hero")
console.info(someone)