// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, high) {
  let area;
  area = (base * high) / 2;
  return (area);
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimo;
  let concatenador = '';
  ultimo = array.length - 1;
  concatenador = array[ultimo];
  concatenador += ', ' + array[0];
  return concatenador;
}

// Desafio 5
function footballPoints(wins, ties) {
  let qntPontos = 0;
  wins *= 3;
  qntPontos += wins + ties;
  return qntPontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = 0;
  let numeroDeVezes = 0;
  let var1 = 0;
  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    let repeticao = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] >= array[index2]) {
        contador += 1;
      }
      if (array[index] === array[index2]) {
        repeticao += 1;
      }
    }
    if (contador > var1) {
      var1 = contador;
      maiorNumero = array[index];
      numeroDeVezes = repeticao;
    }
  }
  return numeroDeVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  } else if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)){
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];

  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      array2.push('fizzBuzz');
    } else if ((array[index] % 5) === 0) {
        array2.push('buzz');
    } else if ((array[index] % 3) === 0) {
        array2.push('fizz');
    } else {
        array2.push('bug!');
    }
  }
  return array2;
}

// Desafio 9
function encode(string2) {
  let stringCodificada = '';

  for (let index = 0; index < string2.length; index += 1) {
    if (string2[index] === 'a') {
      stringCodificada += '1';
    } else if (string2[index] === 'e') {
      stringCodificada += '2';
    } else if (string2[index] === 'i') {
      stringCodificada += '3';
    } else if (string2[index] === 'o') {
      stringCodificada += '4';
    } else if (string2[index] === 'u') {
      stringCodificada += '5';
    } else {
      stringCodificada += string2[index];
    }
  }
  return stringCodificada;
}
function decode(string) {
  let stringdecodificada = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      stringdecodificada += 'a';
    } else if (string[index] === '2') {
      stringdecodificada += 'e';
    } else if (string[index] === '3') {
      stringdecodificada += 'i';
    } else if (string[index] === '4') {
      stringdecodificada += 'o';
    } else if (string[index] === '5') {
      stringdecodificada += 'u';
    } else {
      stringdecodificada += string[index];
    }
  }
  return stringdecodificada;
}

// Desafio 10
function techList(tech, name) {
  let arrayOrdenado = tech.sort();
  let arrayOrdemCrescente = [];

  if (tech.length !== 0) {
    for (let index = 0; index < tech.length; index += 1) {
      let objeto = {
      };
      objeto['tech'] = tech[index];
      objeto['name'] = name;
      arrayOrdemCrescente.push(objeto);

    }
    return arrayOrdemCrescente;
  } else {
   return ('Vazio!');
  }
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
