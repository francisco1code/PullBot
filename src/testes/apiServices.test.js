import {CodigoDevicePost} from '../modules/apiServices';
import {ConfirmaLoginContaUsuario} from '../modules/apiServices';
import {contribuinteRepositorio} from '../modules/apiServices';
import {GraficoPessoal} from '../libraries/app';
import {geracaoPorGrupoAdicoes} from '../modules/apiServices';
import {geracaoPorGrupoDelecoes} from '../modules/apiServices';
import {geracaoPorGrupoCommits} from '../modules/apiServices';
import {CreateDivDisplay} from '../modules/apiServices'

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
    responseText: 'device_code=CHAVE_DO_DEVICE_CODE123&expires_in=000&interval=5&user_code=0000-ABCD&verification_uri=https%3A%2F%2Fgithub.com%2Flogin%2Fdevice',
    setRequestHeader: jest.fn()
};
window.XMLHttpRequest = jest.fn(() => mockXHR);


var objetoJson = [
    {
    number: 12,
    weeks: [

    ],
    title: 'teste',
    created_at: 'teste1',
    closed_at: 'teste2',
    },
    {
    number: 12,
    weeks: [
        
    ],
    title: 'teste',
    created_at: 'teste1',
    closed_at: 'teste2',
    }
]
// MOCK DE UM OBJETO JSON
JSON.parse = jest.fn().mockReturnValue(objetoJson)

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


test("call loginDevice()", () => {
    
    CodigoDevicePost();

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


test("ConfirmaLoginContaUsuario()", () => {

    mockXHR.responseText = 'access_token=TOKEN_DE_ACESSO_GITHUB123&scope=repo%2Cuser&token_type=bearer'

    ConfirmaLoginContaUsuario();

    // TESTANDO SE O TOKEN DO GITHUB ESTÁ SENDO SALVO CORRETAMENTE
    expect(localStorage.getItem('token')).toBe('TOKEN_DE_ACESSO_GITHUB123')
})


// MOCK DO MÉTODO GraficoPessoal()
jest.mock('../libraries/app')


var numeroMilestone = 12;
var token = localStorage.getItem('token');
var owner = 'owner';
var repositorio = 'repositorio';
var sprint = 11;


test("Criação de gráficos", () => {
    contribuinteRepositorio(numeroMilestone, token, owner, repositorio, sprint);

    // TESTANDO SE contribuinteRepositorio() EXECUTOU O MÉTODO GraficoPessoal()
    expect(GraficoPessoal).toHaveBeenCalledTimes(1);
})



test('Métodos de geração de gráficos', () => {

    // EDITANDO OBJETO JSON PARA SE ADAPTAR AOS MÉTODOS E A SAÍDA ESPERADA
    objetoJson = [
        {
            weeks: [
                {
                    w: 1612051200,
                    a: 0,
                    d: 0,
                    c: 0
                },
                {
                    w: 1612656000,
                    a: 0,
                    d: 0,
                    c: 0
                }
            ],
            author: {
                login: 'usuario'
            }
        },
        {
            weeks: [
                {
                    w: 1612051200,
                    a: 7,
                    d: 2,
                    c: 11
                },
                {
                    w: 1612656000,
                    a: 4,
                    d: 6,
                    c: 10
                }
            ],
            author: {
                login: 'usuario'
            }
        },
    ];
    JSON.parse = () => objetoJson;
    mockXHR.responseText = objetoJson;


    // TESTANDO SE HOUVE UMA CHAMADA A API DO GITHUB EM CADA MÉTODO
    mockXHR.open.mockClear();
    geracaoPorGrupoAdicoes(token, owner, repositorio);
    expect(mockXHR.open.mock.calls.length).toBe(1);
    
    mockXHR.open.mockClear();
    geracaoPorGrupoDelecoes(token, owner, repositorio);
    expect(mockXHR.open.mock.calls.length).toBe(1);

    mockXHR.open.mockClear();
    geracaoPorGrupoCommits(token, owner, repositorio);
    expect(mockXHR.open.mock.calls.length).toBe(1);
})


// MOCK getComputedStyle
const mockGetStyle = {
    display: 'none'
}
window.getComputedStyle = jest.fn(() => mockGetStyle);

// MOCK document.createElement
const mockCreateElement = {
    style: null,
    sheet: {
        addRule: jest.fn()
    },
    styleSheet: {
        addRule: jest.fn()
    }
}
window.document.createElement = jest.fn(() => mockCreateElement)

// MOCK document.getElementsByTagName
const mockGetElementByTag = [{
    appendChild: jest.fn()
}]
window.document.getElementsByTagName = jest.fn(() => mockGetElementByTag)


test('CreateDivDisplay()', () => {
    
    mockGetStyle.display = 0;
    mockCreateElement.sheet.insertRule = jest.fn();
    mockGetElementByTag[0].appendChild.mockClear();
    document.getElementById.mockClear();
    getComputedStyle.mockClear();

    CreateDivDisplay(2, 2, 2);

    // TESTANDO SE O MÉTODO createClass() FOI EXECUTADO DUAS VEZES
    expect(mockGetElementByTag[0].appendChild.mock.calls.length).toBe(2);

    // TESTANDO SE O MOCK getComputedStyle() FOI EXECUTADO DUAS VEZES
    expect(getComputedStyle.mock.calls.length).toBe(2);
});