class Customer {
    // harus melakukan deklarasi terlebih dahulu
    name: string = "anonymous";
    readonly age: number;
    job?: string;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    print():void {
        console.info(`haloo perkenalkan nama saya ${this.name} umur saya ${this.age} dan pekerjaan saya adalah ${this.job}`)
    }
}

const bryan: Customer =  new Customer("bryan", 18)
bryan.job = "programmer"
bryan.print()