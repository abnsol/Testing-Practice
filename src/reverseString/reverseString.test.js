import {reverseString} from './reverseString';

test('reversing string', () => {
    expect(reverseString('Word')).toMatch('droW');
});

test('reverse sentence', () => {
    expect(reverseString('This is a sentence')).toMatch('ecnetnes a si sihT');
});