// Desafio 1
function compareTrue(value1, value2) {
  if ((value1 === true) && (value2 === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  text += ' ';
  let result = [];
  let auxiliary = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] !== ' ') {
      auxiliary += text[index];
    } else {
      result.push(auxiliary);
      auxiliary = '';
    }
  }
  return result;
}

// Desafio 4
function concatName(names) {
  let result = names[names.length - 1] + ', ' + names[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + ties;
  return totalPoints;
}

// Funcao auxiliar
function countsRepeatedNumbers(array, number) {
  repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      repeat += 1;
    }
  }
  return repeat;
}
// console.log(countsRepeatedNumbers([9, 9, 9, 3, 9, 5, 7], 9));

// Desafio 6
function highestCount(array) {
  let highestValueAmount;
  let bigger = array[0];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  highestValueAmount = countsRepeatedNumbers(array, bigger);
  return highestValueAmount;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  // console.log(`cat1: ${distanceCat1}, cat2: ${distanceCat2}`);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Auxiliary function
function divisible(dividend, divisor) {
  if ((dividend % divisor) === 0) {
    return true;
  }
  return false;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  let divisorOf3;
  let divisorOf5;
  for (let index = 0; index < array.length; index += 1) {
    divisorOf3 = divisible(array[index], 3);
    divisorOf5 = divisible(array[index], 5);
    if (divisorOf3 && divisorOf5) {
      result.push('fizzBuzz');
    } else if (divisorOf3) {
      result.push('fizz');
    } else if (divisorOf5) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(text) {
  let encodedText = '';
  let character;
  for (let index = 0; index < text.length; index += 1) {
    character = text[index];
    switch (character) {
      case 'a':
        encodedText += '1';
        break;
      case 'e':
        encodedText += '2';
        break;
      case 'i':
        encodedText += '3';
        break;
      case 'o':
        encodedText += '4';
        break;
      case 'u':
        encodedText += '5';
        break;
      default:
        encodedText += text[index];
        break;
    }
  }
  return encodedText;
}
// console.log(encode('hi there!'));

function decode(text) {
  let decodedText = '';
  let character;
  for (let index = 0; index < text.length; index += 1) {
    character = text[index];
    switch (character) {
      case '1':
        decodedText += 'a';
        break;
      case '2':
        decodedText += 'e';
        break;
      case '3':
        decodedText += 'i';
        break;
      case '4':
        decodedText += 'o';
        break;
      case '5':
        decodedText += 'u';
        break;
      default:
        decodedText += text[index];
        break;
    }
  }
  return decodedText;
}

// Desafio 10
function techList(technologies, name) {
  // seu código aqui
  let myTechList = [];
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < technologies.length; index += 1) {
    myTechList.push({
      tech: technologies[index],
      name: name,
    });
  }
  return myTechList;
}
// console.log(techList([], 'Enio'));

function checkArrayIsValid(array) {
  /* for (let index = 0; index < array.length; index++) {
    if (array[index] < 0 || array[index] > 9 || repeat > 2) {
      
    }
  } */
  // return tru
}

// Desafio 11
function generatePhoneNumber(numbers) {
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
