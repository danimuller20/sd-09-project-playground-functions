// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true
  }
  return false
}
// console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  base = Number(base)
  height = Number(height)
  return base * height / 2
}
// console.log(calcArea(5, 98))

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ")
}
// console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(myArray) {
  // seu código aqui
  let firstElement = myArray[0]
  let lastElement = myArray[myArray.length - 1]
  return (lastElement + ', ' + firstElement)
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // win = 3 & tie = 1
  let totalPoints = Number()
  totalPoints = wins * 3 + ties
  return totalPoints
}
// console.log(footballPoints(3, 2))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
