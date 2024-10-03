/*
ciphered word in array = []
iterate through the word
    if small alphabetic:
        Ascii code of char - 97 + shiftingKey) % 26 + 97 
        push
    else if capital alphabetic:
        (Ascii code of char - 65 + shiftingKey) % 26 + 65 
        push
    else: non alphabetic
        push to array
return joinedCipherArray
*/

function rangeOfLetter(asciiCode) {
    if (65 <= asciiCode && asciiCode <= 90) return 1;
    else if (97 <= asciiCode && asciiCode <= 122) return 2;
    else return 3;
}

export function caeserCipher(word,key) {
    const cipheredCharacters = [];
    for (let i = 0; i < word.length; i++){
        let asciiCode = word.charCodeAt(i);
        if (rangeOfLetter(asciiCode) === 1){
            let cipheredLetter = String.fromCharCode((asciiCode - 65 + key) % 26 + 65); 
            cipheredCharacters.push(cipheredLetter);
        }
        else if (rangeOfLetter(asciiCode) === 2){
            let cipheredLetter = String.fromCharCode((asciiCode - 97 + key) % 26 + 97); 
            cipheredCharacters.push(cipheredLetter);
        }
        else{
            cipheredCharacters.push(word.charAt(i));
        }
    }
    return cipheredCharacters.join('');
};