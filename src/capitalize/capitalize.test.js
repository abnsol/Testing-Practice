import {capitalize} from "./capitalize.js";

test('capitalized', () => 
        expect(capitalize('Word').charAt(0)).toMatch('word'.charAt(0).toUpperCase()));


