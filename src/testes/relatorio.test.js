import {criarRelatorio} from '../modules/relatorio';
import {File} from '../libraries/filesaver';

var objetoJson = [
  {
  login: 'teste',
  user: 'teste1',
  assignees: 'teste'
},{
  login: 'teste',
  user: 'teste1',
  assignees: 'teste'
}]

// MOCK DA CLASSE XMLHttpRequest
const mockXHR = {
  addEventListener: jest.fn(),
  setRequestHeader: jest.fn(),
  readyState: 4,
  open: jest.fn(() => {
    mockXHR.readyState = 0;
    try {
      var quantidadeDeChamadas = mockXHR.addEventListener.mock.calls.length;
      
      if(quantidadeDeChamadas > 0)
        mockXHR.addEventListener.mock.calls[quantidadeDeChamadas-1][1]();
      
    } catch (e) {}    }
  ),
  send: jest.fn(() => {
    mockXHR.readyState = 4;
    try {
      var quantidadeDeChamadas = mockXHR.addEventListener.mock.calls.length;
      
      if(quantidadeDeChamadas > 0) 
        mockXHR.addEventListener.mock.calls[quantidadeDeChamadas-1][1]();
      
    } catch (e) {}    }
  ),
  responseText: objetoJson
};
window.XMLHttpRequest = jest.fn(() => mockXHR);

// MOCK DO localStorage
global.localStorage = {
  store:{},
  getItem: (key) => this.store[key],
  setItem: (key, value) => this.store[key] = value
}

// MOCK DE UM OBJETO JSON
JSON.parse = jest.fn().mockReturnValue(objetoJson)

// MOCK DO MÉTODO File()
jest.mock('../libraries/filesaver')

criarRelatorio();

test("calls File()", () => {

    // TESTANDO SE criarRelatorio() EXECUTOU O MÉTODO File() (última linha)
    expect(File).toHaveBeenCalledTimes(1);
});

test("calls addEventListener()", () => {

    // TESTANDO SE criarRelatorio() EXECUTOU O MOCK addEventListener 6 VEZES (uma vez para cada informação obtida pela API)
    expect(mockXHR.addEventListener).toHaveBeenCalledTimes(6);
})