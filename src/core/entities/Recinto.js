class Recinto {
  constructor(numero, bioma, espacoTotal, animais = []) {
    this.numero = numero;
    this.bioma = bioma;
    this.espacoTotal = espacoTotal;
    this.animais = animais;
  }
}

export { Recinto };