import { strict as assert } from 'node:assert';

import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  buscarDadoAsync
} from './trabalho.js';

describe('Testes da disciplina - fundamentos JS', () => {
  
  it('QUANDO informar um nome para o Pet, DEVE ser impresso na tag com letras maiúsculas', () => {
    assert.strictEqual(geradorDeTagsDeIdentificacao('Pantera'), 'PANTERA');
    assert.strictEqual(geradorDeTagsDeIdentificacao('pantera'), 'PANTERA');
  });

  it('QUANDO a idade = 1 + porte M, DEVE ser permitida a adoção', () => {
    assert.strictEqual(verificarSePodeSerAdotado(1, 'M'), true)
    assert.strictEqual(verificarSePodeSerAdotado(2, 'M'), false)
    assert.strictEqual(verificarSePodeSerAdotado(1, 'P'), false)
  });

   it('QUANDO o peso = 14.5, DEVE ser retornado 4350 gramas para o consumo diário', () => {
    assert.strictEqual(calcularConsumoDeRacao('Pitoco', 1, 14.5), 4350);
    assert.strictEqual(calcularConsumoDeRacao('Biul', 2, 12.5), 3750);
  });

});

