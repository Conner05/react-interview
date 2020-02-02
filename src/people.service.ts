import { Person } from "./person.model";

export default function getAllPeople(): Person[] {
  return [
    { firstName: "Ash", lastName: "Ketchum", age: 10, gender: "Male" },
    { firstName: "Professor", lastName: "Oak", age: 50, gender: "Male" },
    { firstName: "Mrs.", lastName: "Ketchum", age: 35, gender: "Female" },
    { firstName: "Misty", lastName: "Upham", age: 13, gender: "Female" },
    { firstName: "Nurse", lastName: "Joy", age: 28, gender: "Female" },
    { firstName: "Officer", lastName: "Jenny", age: 30, gender: "Female" },
    { firstName: "Lieutenant", lastName: "Surge", age: 40, gender: "Male" },
  ]
}