class StateStore<T> {
    private data: T;

    constructor(data: T) {
        this.data = data
    }

    get state(): T {
        return this.data
    }
    set state(value: T) {
        if (typeof value === "string" && value.length !== 0) {
            this.data = value
        }
        else if (Array.isArray(value) && value.length !== 0) {
            this.data = value
        }
        else {
            console.info('tidak menerima perubahan dalam bentuk tersebut')
        }
    }
}

const apa = new StateStore<(string | number | boolean)[] | string | number | boolean>("gajah")
console.log(apa.state) // get state
apa.state = "jerapah" // set state
console.log(apa.state) // get state
