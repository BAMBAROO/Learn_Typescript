interface Hero {
    name: string,
    role: string,
    rank: number
}

// const hunter: Hero = {
//     name: "bryan",
//     role: "fighter"
// }

const hadir: keyof Hero = "name"
console.info(hadir)

// console.log(Object.keys(hunter))
// const key: string = "name"
// const trueKey: keyof Hero = "name"
// console.log(hunter[trueKey])