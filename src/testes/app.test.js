import {GraficoPessoal} from '../libraries/app';
import {GraficoGrupoCommits} from '../libraries/app';
import {GraficoGrupoAdicoes} from '../libraries/app';
import {GraficoGrupoDelecoes} from '../libraries/app';

// MOCK DO OBJETO Document
const mockDocument = {
    getContext: jest.fn()
}  
window.document.getElementById = jest.fn(() => mockDocument);

// MOCK DA CLASSE Chart
window.Chart = jest.fn();


test('GraficoPessoal()', () => {
    GraficoPessoal('nome', 1, 11);
    var segundoParametro = Chart.mock.calls[0][1];

    // TESTANDO SE O SEGUNDO PARÂMETRO PASSADO PARA A CLASSE É UM OBJETO
    expect(typeof segundoParametro).toBe('object');

    // TESTANDO SE O PARÂMETRO ESTÁ SENDO RECEBIDO COMO O ESPERADO
    expect(segundoParametro.type).toBeDefined();
    expect(segundoParametro.options).toBeDefined();
    expect(segundoParametro.data).toBeDefined();
})

test('GraficoGrupoCommits()', () => {
    GraficoGrupoCommits(null, 1);
    var segundoParametro = Chart.mock.calls[1][1];

    // TESTANDO SE O SEGUNDO PARÂMETRO PASSADO PARA A CLASSE É UM OBJETO
    expect(typeof segundoParametro).toBe('object');

    // TESTANDO SE O PARÂMETRO ESTÁ SENDO RECEBIDO COMO O ESPERADO
    expect(segundoParametro.type).toBeDefined();
    expect(segundoParametro.options).toBeDefined();
    expect(segundoParametro.data).toBeDefined();
})

test('GraficoGrupoAdicoes()', () => {
    GraficoGrupoAdicoes(null, 1);
    var segundoParametro = Chart.mock.calls[2][1];

    // TESTANDO SE O SEGUNDO PARÂMETRO PASSADO PARA A CLASSE É UM OBJETO
    expect(typeof segundoParametro).toBe('object');

    // TESTANDO SE O PARÂMETRO ESTÁ SENDO RECEBIDO COMO O ESPERADO
    expect(segundoParametro.type).toBeDefined();
    expect(segundoParametro.options).toBeDefined();
    expect(segundoParametro.data).toBeDefined();
})

test('GraficoGrupoDelecoes()', () => {
    GraficoGrupoDelecoes(null, 1);
    var segundoParametro = Chart.mock.calls[3][1];

    // TESTANDO SE O SEGUNDO PARÂMETRO PASSADO PARA A CLASSE É UM OBJETO
    expect(typeof segundoParametro).toBe('object');

    // TESTANDO SE O PARÂMETRO ESTÁ SENDO RECEBIDO COMO O ESPERADO
    expect(segundoParametro.type).toBeDefined();
    expect(segundoParametro.options).toBeDefined();
    expect(segundoParametro.data).toBeDefined();
})