interface HasID {
    id: number
}

// MENJADIKAN ID SEBUAH HAL YANG WAJIB
function employee <T extends HasID>(person: T): T {
    return person
}

const john = employee({id: 2, person: "bryan"})
const mark = employee ({id: 3, name: "mark"})
