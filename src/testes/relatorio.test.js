import criarRelatorio from '../modules/relatorio';
import {File} from '../libraries/filesaver';

var objetoJson = [
  [{
  "teste": 'teste',
  "teste1": 'teste1',
}],
[{
  "teste2": 'teste',
  "teste3": 'teste'
}]]


// MOCK DA CLASSE XMLHttpRequest
const mockXHR = {
  addEventListener: jest.fn(),
  setRequestHeader: jest.fn(),
  open: jest.fn(),
  send: jest.fn(() => {
    try {
      var quantidadeDeChamadas = mockXHR.addEventListener.mock.calls.length;
      if(quantidadeDeChamadas > 0) {
        mockXHR.addEventListener.mock.calls[quantidadeDeChamadas-1][1]();
        return;
      }
      
    } catch (e) {}
    
    }
  ),
  readyState: 4,
  responseText: objetoJson
};
window.XMLHttpRequest = jest.fn(() => mockXHR);

// MOCK DE UM OBJETO JSON
JSON.parse = jest.fn().mockReturnValue(objetoJson)

// MOCK DO MÉTODO File()
jest.mock('../libraries/filesaver')

test("calls File()", () => {
    criarRelatorio();

    // TESTANDO SE A API EXECUTOU O MOCK addEventListener 6 VEZES (uma vez para cada informação obtida no relatório)
    expect(mockXHR.addEventListener).toHaveBeenCalledTimes(6);

    // TESTANDO SE criarRelatorio() CHEGOU A CHAMAR O MÉTODO File() (última linha)
    expect(File).toHaveBeenCalledTimes(1);
});