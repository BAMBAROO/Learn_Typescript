import {classType, customerType, Friends, Profile} from "../tipe_data/data"

describe("hello", function () {

  it("any", function () {
    const person: any = {
      nama: "bryan",
      umur: 21,
      gender: "pria"
    }
    person.power = "invisible"
    expect(person.power).toBe("invisible")
  })

  it("union", function () {
    let union: string | number | boolean = "mage"
    union = true
    expect(union).toBe(true)
  })

  it("union data type checker", function () {
    function checker(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase()
      } else if (typeof value === "number") {
        return value + 5
      } else {
        return !value
      }
    }

    expect(checker("bryan")).toBe("BRYAN")
    expect(checker(100)).toBe(105)
    expect(checker(true)).toBe(false)
  })

it("schema or data alias type", function () {
  const friends: Friends = {
    name: "andrew",
    age: 38
  }

  const saya: Profile = {
    name: "bryan",
    age: 19,
    friends : friends
  }

  expect(saya.friends.name).toBe("andrew")
})
  it("enum testing", function () {
    const customer: customerType = {
      name: "bryan",
      age:23,
      classCustomer: classType.platinum
    }

    expect(customer.classCustomer).toBe(2)
    console.log(customer)
  })
})
