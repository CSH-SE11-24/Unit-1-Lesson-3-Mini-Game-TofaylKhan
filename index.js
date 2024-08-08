
let name = prompt("Enter your name")
console.log (name)
let color = prompt(`ok, ${name},  Guess the color`)

let ranColor = ("Brown")

if(color === "Brown") {
  console.log("Great Job! You are correct")
} else {
  console.log("Wrong Try again")
  let color = prompt(`ok, ${name},  Guess the color`)

}