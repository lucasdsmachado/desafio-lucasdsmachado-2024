import { RecintosZoo } from "../recintos-zoo.js";

describe('Casos adicionais dos Recintos do Zoologico', () => {

  test('Deve encontrar recinto para 1 leão', () => {
    const resultado = new RecintosZoo().analisaRecintos('LEAO', 1);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 5 (espaço livre: 3 total: 9)');
    expect(resultado.recintosViaveis.length).toBe(1);
  });

  test('Não deve encontrar recinto para 1 leopardo', () => {
    const resultado = new RecintosZoo().analisaRecintos('LEOPARDO', 1);
    expect(resultado.erro).toBe("Não há recinto viável");
    expect(resultado.recintosViaveis).toBeFalsy();
  });

  test('Deve encontrar recinto para 1 hipopótamo', () => {
    const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 1);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 3 (espaço livre: 0 total: 7)');
    expect(resultado.recintosViaveis[1]).toBe('Recinto 4 (espaço livre: 4 total: 8)');
    expect(resultado.recintosViaveis.length).toBe(2);
  });

  test('Deve encontrar recintos para 2 hipopótamos', () => {
    const resultado = new RecintosZoo().analisaRecintos('HIPOPOTAMO', 2);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 4 (espaço livre: 0 total: 8)');
    expect(resultado.recintosViaveis.length).toBe(1);
  });

  test('Deve encontrar recintos para 1 gazela', () => {
    const resultado = new RecintosZoo().analisaRecintos('GAZELA', 1);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
    expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
    expect(resultado.recintosViaveis.length).toBe(2);
  });

  test('Deve encontrar recintos para 2 gazelas', () => {
    const resultado = new RecintosZoo().analisaRecintos('GAZELA', 2);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 2 total: 10)');
    expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
    expect(resultado.recintosViaveis.length).toBe(2);
  });
  
  test('Deve encontrar recintos para 1 macaco', () => {
    const resultado = new RecintosZoo().analisaRecintos('MACACO', 1);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 6 total: 10)');
    expect(resultado.recintosViaveis[1]).toBe('Recinto 3 (espaço livre: 3 total: 7)');
    expect(resultado.recintosViaveis.length).toBe(2);
  });

  test('Deve encontrar recintos para 3 macacos', () => {
    const resultado = new RecintosZoo().analisaRecintos('MACACO', 3);
    expect(resultado.erro).toBeFalsy();
    expect(resultado.recintosViaveis[0]).toBe('Recinto 1 (espaço livre: 4 total: 10)');
    expect(resultado.recintosViaveis[1]).toBe('Recinto 2 (espaço livre: 2 total: 5)');
    expect(resultado.recintosViaveis[2]).toBe('Recinto 3 (espaço livre: 1 total: 7)');
    expect(resultado.recintosViaveis.length).toBe(3);
  });

  test('Não deve encontrar recintos para 4 leões', () => {
    const resultado = new RecintosZoo().analisaRecintos('LEAO', 4);
    expect(resultado.erro).toBe("Não há recinto viável");
    expect(resultado.recintosViaveis).toBeFalsy();
  });
});
