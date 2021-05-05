import {GraficoPessoal} from '../libraries/app';

// MOCK DO OBJETO Document
const mockDocument = {
    getContext: jest.fn()
}  
window.document.getElementById = jest.fn(() => mockDocument);

// MOCK DA CLASSE Chart
window.Chart = jest.fn();


GraficoPessoal('nome', 1, 11);
test('GraficoPessoal()', () => {
    var segundoParametro = Chart.mock.calls[0][1];

    // TESTANDO SE O SEGUNDO PARÂMETRO PASSADO PARA A CLASSE É UM OBJETO
    expect(typeof segundoParametro).toBe('object');

    // TESTANDO SE O PARÂMETRO ESTÁ SENDO RECEBIDO COMO O ESPERADO
    expect(segundoParametro.type).toBeDefined();
    expect(segundoParametro.options).toBeDefined();
    expect(segundoParametro.data).toBeDefined();
})