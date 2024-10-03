import {caeserCipher} from './caeserCipher';

test('Wrapping ascii',() => {
    expect(caeserCipher('xyz',3)).toBe('abc');
});

test('case preservation',() => {
    expect(caeserCipher('HeLLo',3)).toBe('KhOOr');
});

test('punctuation',() => {
    expect(caeserCipher('Hello, World!',3)).toBe('Khoor, Zruog!');
});

test('another key', () => {
    expect(caeserCipher('Hello, World!!',4)).toBe('Lipps, Asvph!!');
});