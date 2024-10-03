import {analyzeArray} from './analyzeArray';

test('analyzeArray',() => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        max: 8,
        min: 1,
        average: 4,
        length: 6
     });
});

test('analyzeArray',() => {
    expect(analyzeArray([])).toStrictEqual({});
});