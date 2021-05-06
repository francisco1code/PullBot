import {criarPullRequest} from '../modules/services';
import {criarRelatorio} from '../modules/relatorio';

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
    }),
    readyState: 4
};
window.XMLHttpRequest = jest.fn(() => mockXHR);


// MOCK DO OUVINTE document.addEventListener
global.evento = {
    target: {
        id: "submit"
    }}
window.document.addEventListener = jest.fn(() => {
    try {
        var quantidadeDeChamadas = document.addEventListener.mock.calls.length;
        if(quantidadeDeChamadas > 0) {
            document.addEventListener.mock.calls[quantidadeDeChamadas-1][1](evento);
            return;
        }
    } catch (e) {}
})


// MOCK DO MÉTODO document.getElementById()
const mockElementById = {
    checked: true,
    classList: {
        add: jest.fn(),
        remove: jest.fn(),
    },
    addEventListener: jest.fn()
}
window.document.getElementById = jest.fn(() => mockElementById)


// MOCK DO MÉTODO criarRelatorio()
jest.mock('../modules/relatorio')

criarPullRequest()
test('criarPullRequest()', () => {
    
    // TESTANDO SE O MÉTODO criarPullRequest() EXECUTOU O MÉTODO criarRelatório() (última linha)
    expect(criarRelatorio).toHaveBeenCalledTimes(1);
})