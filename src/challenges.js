//VQV Brows






// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let word = '';
  phrase += ' ';
  let n = phrase.length;
  let wordsSplited = [];
  for(let index = 0; index < n; index += 1){
    phrase += ' ';
    let letter = phrase.charAt(index);
    if (letter != ' ') {
      word += letter;
    } else {
      wordsSplited.push(word);
      word = '';
    }
  }
  return wordsSplited;
}

// Desafio 4
function concatName(array) {
  let n = array.length;
  let phrase = array[n-1] + ', ' + array[0]
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let higher = array[0];
  let n = array.length;
  let counter = 0;
  for (let index = 0; index < n; index += 1){
    if (array[index] > higher){
      higher = array[index];
    }
  }
  for ( let index = 0; index < n; index += 1){
    if (higher = array[index]){
      counter += 1;
    }    
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if (dist1 < 0){
    dist1 = (dist1 * -1);
  } else if (dist2 < 0){
    dist2 = (dist2 * -1);
  }

  if (dist1 === dist2){
    return 'os gatos trombam e o rato foge';
  }else if (dist1 < dist2){
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for (let index = 0; index < array.length; index += 1){
    if (array[index] % 3 === 0 && array[index] % 5 === 0){
      array2.push('fizzBuzz');
    } else if (array[index] % 5 === 0){
      array2.push('buzz');
    } else if (array[index] % 3 === 0){
          array2.push('fizz');
    } else {
      array2.push('bug!')
    }
  }
  return array2;
}

// Desafio 9
function encode(phraseLetters) {
  let n = phraseLetters.length;
  let phrase2 = '';
  for (let index = 0; index < n; index += 1){
    if (phraseLetters.charAt(index) === 'a'){
      phrase2 += '1';
    } else if (phraseLetters.charAt(index) === 'e'){
      phrase2 += '2';
    } else if (phraseLetters.charAt(index) === 'i'){
      phrase2 += '3';
    } else if (phraseLetters.charAt(index) === 'o'){
      phrase2 += '4';
    } else if (phraseLetters.charAt(index) === 'u'){
      phrase2 += '5';
    } else {
      phrase2 += phraseLetters.charAt(index);
    }
  }
  return phrase2;
}

function decode(phraseNumbers) {
  let n = phraseNumbers.length;
  let phrase2 = '';
  for (let index = 0; index < n; index += 1){
    if (phraseNumbers.charAt(index) === '1'){
      phrase2 += 'a';
    } else if (phraseNumbers.charAt(index) === '2'){
      phrase2 += 'e';
    } else if (phraseNumbers.charAt(index) === '3'){
      phrase2 += 'i';
    } else if (phraseNumbers.charAt(index) === '4'){
      phrase2 += 'o';
    } else if (phraseNumbers.charAt(index) === '5'){
      phrase2 += 'u';
    } else {
      phrase2 += phraseNumbers.charAt(index);
    }
  }
  return phrase2;
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
