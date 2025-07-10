// Turn input text to uppercase
const CaesarCipher = document.getElementById('Caesar-Cipher');
CaesarCipher.addEventListener('input', (event) => {
    CaesarCipher.value = event.target.value.toUpperCase();
});

const CaesarCipher2 = document.getElementById('Caesar-Cipher2');
CaesarCipher2.addEventListener('input', (event) => {
    CaesarCipher2.value = event.target.value.toUpperCase();
});


// get value from encrypt or decrypt button
const CaesarCipherEncrypt = document.getElementById('Caesar-Cipher-Encrypt');
const CaesarCipherDecrypt = document.getElementById('Caesar-Cipher-Decrypt');
// get value from input to encrypt or decrypt
const CaesarCipherNum = document.getElementById('Caesar-Cipher-Num');
// get value from encrypt or decrypt button2
const CaesarCipherEncrypt2 = document.getElementById('Caesar-Cipher-Encrypt2');
const CaesarCipherDecrypt2 = document.getElementById('Caesar-Cipher-Decrypt2');
const BruteForce = document.getElementById('Caesar-Cipher-BruteForce');
// Adjust the shift value dynamically based on the button clicked
const shiftCipher = (shiftValue) => {
    const cipherValues = [...CaesarCipher.value].map(char => char.charCodeAt(0) - 65);
    const shiftedValues = cipherValues.map(value => (value + shiftValue + 26) % 26); // Ensure positive modulo
    const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
    document.getElementById('Caesar-Cipher-Output').textContent = shiftedText;
};
CaesarCipherEncrypt.addEventListener('click', () => shiftCipher(3));
CaesarCipherDecrypt.addEventListener('click', () => shiftCipher(-3));

const shiftCipher2 = (shiftValue) => {
    const cipherValues = [...CaesarCipher2.value].map(char => char.charCodeAt(0) - 65);
    const shiftedValues = cipherValues.map(value => (value + shiftValue + 26) % 26); // Ensure positive modulo
    const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
    document.getElementById('Caesar-Cipher-Output2').textContent = shiftedText;
};

CaesarCipherEncrypt2.addEventListener('click', () => shiftCipher2(parseInt(CaesarCipherNum.value, 10)));
CaesarCipherDecrypt2.addEventListener('click', () => shiftCipher2(parseInt(-CaesarCipherNum.value, 10)));


// Perform brute force decryption for shift values 0-26
const bruteForceCipher = () => {
    let bruteForceResults = '';
    for (let i = 0; i < 26; i++) {
        const cipherValues = [...CaesarCipher2.value].map(char => char.charCodeAt(0) - 65);
        const shiftedValues = cipherValues.map(value => (value + i + 26) % 26); // Decrypt with shift -i
        const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
        bruteForceResults += `Shift ${i}: ${shiftedText}<br>`;
    }
    document.getElementById('Caesar-Cipher-Output2').innerHTML = bruteForceResults;
};
 BruteForce.addEventListener('click', bruteForceCipher);

