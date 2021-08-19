
// count is of "type" number
let count = 5
count = 10
//count = "Sarah"

// const's type is a literal
const fname = "Sarah"

// this makes a var of type any
// let testing
let testing: number

// testing = "Sarah"
testing = 5

type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Andy",
    lname: "Anderson",
    grade: 12,
    // favColor: "red"
}

function toString(student: Student): string {
    return JSON.stringify(student)
}


console.log(toString(student));

console.log(add(5, testing))

function add(x: number, y: number): number {
    let result = x + y
    return result
}

// Any & Void types

// Union
type Status = "success" | "failure"
type ServerResponse = Student | Error
//Tupel
function sendMessage(): [status: Status, message: ServerResponse]
{
    return["success", {
        fname: "",
        lname: "",
        grade: 12
    }]
}

const [statusResult, data] = sendMessage()
if (statusResult == "success")
console.log(data)