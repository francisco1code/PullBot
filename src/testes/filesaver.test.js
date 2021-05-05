import {File} from '../libraries/filesaver';

// MOCK DO OBJETO URL
global.URL.createObjectURL = jest.fn();

// MOCK DO OBJETO document.createElement
const mockDocument = {
    download: null,
    rel: null,
    href: null,
    dispatchEvent: jest.fn()
}  
window.document.createElement = jest.fn(() => mockDocument);


// MOCK DO OBJETO document.createEvent
const mockDocumentEvent = {
    initMouseEvent: null,
}  
window.document.createEvent = jest.fn(() => mockDocumentEvent);


// MOCK DA CLASSE Blob
window.Blob = jest.fn(() => {
    const mockBlob = {
        name: null
    }
})

test('calls fileSaver()', () => {
    File('relatorio', 9)
    expect(File).toBeDefined()
})