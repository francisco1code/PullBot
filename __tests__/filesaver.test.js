import {File} from '../libraries/filesaver';

// MOCK DO OBJETO URL
global.URL.createObjectURL = jest.fn();

File('relatorio', 9)
test('calls fileSaver()', () => {
    
    expect(File).toBeDefined()
    expect(URL.createObjectURL.mock.calls.length).toBe(1)
})