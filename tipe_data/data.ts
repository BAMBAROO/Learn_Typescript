const nama: string = "Bryan"
const umur: number = 19
const pria: boolean = true
const hero: string[] = ["batman", "superman", "yanto"] //Array String
const angka: number[] = [1, 2, 3, 4] //Array Number
const arrayTetap: ReadonlyArray<string> = ["superman", "hulk", "budi"] //Readonly
const tetap = [1, 2, 3, 4, 5] as const //Readonly With Different Style
const tuple: readonly [string, string, boolean] = ["bryan", "ganteng", true] //Array Specific Type
const objectAny: any = {
  name: "bryan",
  umur: 19,
  gender: "pria",
  muslim: true
}
let union: string | number | boolean | string[] | number[] = "mage" //Union
union = ["nama saya bryan ganteng"]
//Schema or Data Type Alias
export type Friends = {
  name: string,
  age: number
}
export type Profile = {
  name: string,
  age: number,
  jobs?: string,
  friends: Friends
}
const friends: Friends = {
  name: "andrew",
  age: 38
}
const saya: Profile = {
  name: "bryan",
  age: 19,
  jobs: "programmer",
  friends: friends
}
const objectDefined: {name:string,age:number} = {
  name: "bryan",
  age: 19
}
// console.log(saya) //Schema or Data Type Alias
// console.log(objectDefined)

export enum classType {
  silver= 'silver',
  gold= "gold" ,
  platinum= "platinum"
}
export type customerType = {
  name: string,
  age: number,
  classCustomer: classType
}
// bisa menggunakan interface karena jika melakukan compiling ke JS makan tidak terdeteksi
export interface handphone {
  merk: string,
  year: number,
  readonly description?: string
}

const xiaomi: handphone = {
  merk: "iphone",
  year:2022,
  description: "penggunaan normal dan masih mulus"
}
xiaomi.merk = "samsung";
// xiaomi.description = "sudah rusak" --> tidak bisa diubah merk.description karena readonly

interface ArrayString {
  [index: number]: string
}
const arrayBiasa:ArrayString = ["bryan", "athallah", "siregar"]
// console.log(arrayBiasa[2])

interface ObjectString {
  [key:string]:string
}
const objectBiasa:ObjectString = {
  name: "bryan",
  power: "money"
}
console.log(objectBiasa["name"])