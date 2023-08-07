interface Students {
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    class?: number[]
}

const student: Students = {
    name: "bryan",
    GPA: 400,
    class: [100,200]
}

// for (const key in student) {
//     jika mengakses dari Students (interface) typescript tau tipe data nya
//     console.info(`${key}: ${student[key as keyof Students]}`)
// }

Object.keys(student).map(key => {
    // jika mengakses dari object student typescript tidak memiliki interface atau struktur nya jadi harus menggunakan typeof
    console.log(student[key as keyof typeof student])
    // console.log(key as keyof typeof student)
})
