class Pahlawan {
    _name?: string;

    get name() {
        if (this._name) {
            return this._name
        } else {
            return "empty"
        }
    }

    set name(value: string) {
        if (value !== "") {
            this._name = value
        }
    }
}

const superman = new Pahlawan();
superman.name = "BRYAN LAH WUHUUU"
console.log(superman.name)