import criarRelatorio from '../modules/relatorio';
import fileSaver from '../libraries/filesaver';


// MOCK DA CLASSE XMLHttpRequest
const mockXHR = {
  open: jest.fn(),
  send: jest.fn(),
  readyState: 4,
  addEventListener: jest.fn(),
  setRequestHeader: jest.fn(),
  responseText: [
    {
    "teste": 'teste',
    "teste1": 'teste1',
  },
  {
    "teste2": 'teste',
    "teste3": 'teste'
  }
]
};
const oldXMLHttpRequest = window.XMLHttpRequest;
window.XMLHttpRequest = jest.fn(() => mockXHR);

var objetoJson = [
  [{
  "teste": 'teste',
  "teste1": 'teste1',
}],
[{
  "teste2": 'teste',
  "teste3": 'teste'
}]
]

// MOCK DE UM OBJETO JSON
JSON.parse = jest.fn().mockReturnValue(objetoJson)

// MOCK DO MÉTODO FILESAVER
jest.mock('../libraries/filesaver')


test("calls fileSaver()", () => {
    criarRelatorio();

    // TESTANDO SE criarRelatorio() CHEGOU A CHAMAR O MÉTODO fileSaver() [ÚLTIMA LINHA]
    expect(fileSaver).toHaveBeenCalledTimes(1);
});