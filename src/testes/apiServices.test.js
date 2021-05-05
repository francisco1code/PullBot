import {CodigoDevicePost} from '../modules/apiServices';
import {ConfirmaLoginContaUsuario} from '../modules/apiServices';

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
    readyState: 4,
    responseText: 'device_code=CHAVE_DO_DEVICE_CODE123&expires_in=000&interval=5&user_code=0000-ABCD&verification_uri=https%3A%2F%2Fgithub.com%2Flogin%2Fdevice'
};
window.XMLHttpRequest = jest.fn(() => mockXHR);


// MOCK DO OBJETO Document
const mockDocument = {
    value: null
}  
window.document.getElementById = jest.fn(() => mockDocument);


// MOCK DO localStorage
global.localStorage = {
    store:{},
    getItem: (key) => this.store[key],
    setItem: (key, value) => this.store[key] = value
 }


CodigoDevicePost();
test("call loginDevice()", () => {
    
// TESTANDO SE CodigoDevicePost() EXECUTOU O MÉTODO loginDevice() CORRETAMENTE

    // TESTANDO SE document.getElementById() FOI EXECUTADO 8 VEZES (uma vez para cada elemento do vetor codeUser)
    expect(document.getElementById).toHaveBeenCalledTimes(8);

    // TESTANDO SE OS 8 ELEMENTOS DO VETOR codeUser FORAM PASSADOS CORRETAMENTE
    expect(document.getElementById.mock.calls[0][0]).toBe('user-code-0')
    expect(document.getElementById.mock.calls[1][0]).toBe('user-code-1')
    expect(document.getElementById.mock.calls[2][0]).toBe('user-code-2')
    expect(document.getElementById.mock.calls[3][0]).toBe('user-code-3')
    expect(document.getElementById.mock.calls[4][0]).toBe('user-code-5')
    expect(document.getElementById.mock.calls[5][0]).toBe('user-code-6')
    expect(document.getElementById.mock.calls[6][0]).toBe('user-code-7')
    expect(document.getElementById.mock.calls[7][0]).toBe('user-code-8')

    // TESTANDO SE A CHAVE DO DEVICE (deviceCode) ESTÁ SENDO SALVA CORRETAMENTE
    expect(localStorage.getItem('key_dev')).toBe('CHAVE_DO_DEVICE_CODE123')
});


mockXHR.responseText = 'access_token=TOKEN_DE_ACESSO_GITHUB123&scope=repo%2Cuser&token_type=bearer'

test("ConfirmaLoginContaUsuario()", () => {
    ConfirmaLoginContaUsuario();

    // TESTANDO SE O TOKEN DO GITHUB ESTÁ SENDO SALVO CORRETAMENTE
    expect(localStorage.getItem('token')).toBe('TOKEN_DE_ACESSO_GITHUB123')
})