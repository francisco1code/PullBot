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


// SIMULANDO CLICK NO BOTÃO "submit" DO MODAL
global.evento = {
    target: {
        id: "submit"
    }}

// MOCK DO OUVINTE document.addEventListener
window.document.addEventListener = jest.fn(() => {
    try {
        var quantidadeDeChamadas = document.addEventListener.mock.calls.length;
        if(quantidadeDeChamadas > 0) {
            document.addEventListener.mock.calls[quantidadeDeChamadas-1][1](evento);
            return;
        }
    } catch (e) {}
})


// MOCK document.getElementById()
const mockElementById = {
    checked: true,
    classList: {
        add: jest.fn(),
        remove: jest.fn(() => {
            try {
                var quantidadeDeChamadas = mockElementById.classList.remove.mock.calls.length;
                if(mockElementById.classList.remove.mock.calls[quantidadeDeChamadas-1][0] == 'mostrar') 
                    evento.target.id = null;        // TERMINA QUANDO O MODAL É FECHADO ("submit" ou "X")
            } catch(e) {}
        }),
    },
    addEventListener: jest.fn()
}
window.document.getElementById = jest.fn(() => mockElementById)


// MOCK DO MÉTODO criarRelatorio()
jest.mock('../modules/relatorio')

test('Testando criarPullRequest()', () => {

    criarPullRequest()
    // SIMULANDO QUE O MÉTODO criarPullRequest() CRIOU O PULL REQUEST E EXECUTOU O MÉTODO criarRelatório() (última linha)
    expect(criarRelatorio).toHaveBeenCalledTimes(1);
    expect(mockElementById.classList.remove).toHaveBeenCalledTimes(1);
})



test('Fechando modal e cancelando Pull Request', () => {

    // SIMULANDO CLICK NO BOTÃO "X" DO MODAL
    global.e = {
        target: {
            id: "fechar"
        }}
    mockElementById.addEventListener = jest.fn(() => {
        try {
            var quantidadeDeChamadas = mockElementById.addEventListener.mock.calls.length;
            if(quantidadeDeChamadas > 0) {
                mockElementById.addEventListener.mock.calls[quantidadeDeChamadas-1][1](e);
                return;
            }
        } catch (e) {}
    })


    // LIMPANDO CHAMADAS DOS MOCKS
    mockElementById.classList.remove.mockClear();
    mockXHR.open.mockClear();
    mockXHR.send.mockClear();
    mockXHR.setRequestHeader.mockClear();
         
    criarPullRequest();

    
    // TESTANDO CLICK NO BOTÃO "X" DO MODAL
    expect(mockElementById.classList.remove).toHaveBeenCalledTimes(1);

    // TESTANDO SE O PULL REQUEST NÃO FOI CRIADO
    expect(mockXHR.open).toHaveBeenCalledTimes(0);
    expect(mockXHR.send).toHaveBeenCalledTimes(0);
    expect(mockXHR.setRequestHeader).toHaveBeenCalledTimes(0);
});