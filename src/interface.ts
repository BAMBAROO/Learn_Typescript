interface Organ {
    jantung: boolean,
    hati: boolean,
    usus: boolean,
    ginjal: boolean
}

interface Kepala {
    otak: boolean,
    mata: boolean,
    mulut: boolean,
    telinga: boolean,
    hidung: boolean,
}

interface Mobilitas {
    kaki: boolean,
    tangan: boolean
}

export type Manusia = Organ & Kepala & Mobilitas

const bryan: Manusia = {
    jantung: true,
    hati: true,
    usus: true,
    ginjal: true,
    otak: true,
    mata:true,
    telinga: true,
    mulut: true,
    tangan: true,
    kaki:true,
    hidung: true
}
