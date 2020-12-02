// Desafio 1
function compareTrue(firstBool, secondBool) {
  if (firstBool && secondBool) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  let aux = 0;
  for (let index in string) {
    if (!array[aux]) {
      array[aux] = '';
    }
    if (string[index] === ' ') {
      aux += 1;
      index += 1;
    }
    array[aux] += string[index];
  }
  return array;
}

// Desafio 4
function concatName(array) {
  let firstIndex = array[0];
  let lastIndex = array[array.length - 1];
  let commaPlusSpace = ', '
  let string = lastIndex + commaPlusSpace + firstIndex;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let repeatCount = 0;
  let maxCount = 0;
  for (let index in array) {
    for (let secondaryIndex in array) {
      if (array[index] === array[secondaryIndex]) {
        repeatCount += 1;
      }
      if (repeatCount > maxCount) {
        maxCount = repeatCount;
      }
    }
    repeatCount = 0;
  }
  return maxCount;
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
