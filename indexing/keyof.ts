interface Hero {
    name: string,
    role: string
}

const hunter: Hero = {
    name: "bryan",
    role: "fighter"
}

console.log(Object.keys(hunter))

// const result: keyof Hero = "name"
// const key: string = "name"
// const trueKey: keyof Hero = "name"
// console.log(hunter[trueKey])