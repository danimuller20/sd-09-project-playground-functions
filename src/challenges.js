// Desafio 1
function compareTrue(x, y) {
  if (x === true && y === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(array) {
  let primeiro = array.shift();
  let ultimo = array[array.length - 1]
  array = ultimo + ', ' + primeiro;
  return array;
}
console.log(concatName(['Felipe', 'José', 'Maria', 'Sorin']))

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max(...array);
  let contador = 0;
  for (let i in array) {
    if (array[i] === maior) {
      contador++;
    }
  }
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) return "cat1";
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) return "cat2";
  else return "os gatos trombam e o rato foge";
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 != 0) {
      fizzBuzzArray.push("fizz");
    }
    if (array[i] % 5 === 0 && array[i] % 3 != 0) {
      fizzBuzzArray.push("buzz");
    }
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      fizzBuzzArray.push("fizzBuzz");
    }
    if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      fizzBuzzArray.push("bug!");
    }
  }
  return fizzBuzzArray;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(frase) {
  let fraseArray = frase.toLowerCase().split('');

  for (let i in fraseArray) {
    if (fraseArray[i] === 'a') fraseArray[i] = 1;
    if (fraseArray[i] === 'e') fraseArray[i] = 2;
    if (fraseArray[i] === 'i') fraseArray[i] = 3;
    if (fraseArray[i] === 'o') fraseArray[i] = 4;
    if (fraseArray[i] === 'u') fraseArray[i] = 5;
  }
  return fraseArray.join('');
}
console.log(encode('hi there'))

function decode(frase) {
  let fraseArray = frase.toLowerCase().split('');

  for (let i in fraseArray) {
    if (fraseArray[i] === '1') fraseArray[i] = 'a';
    if (fraseArray[i] === '2') fraseArray[i] = 'e';
    if (fraseArray[i] === '3') fraseArray[i] = 'i';
    if (fraseArray[i] === '4') fraseArray[i] = 'o';
    if (fraseArray[i] === '5') fraseArray[i] = 'u';
  }
  return fraseArray.join('');
}
console.log(decode('h3 th2r2'))

// Desafio 10
function techList(arrayTec, name) {
  
}
console.log()

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
