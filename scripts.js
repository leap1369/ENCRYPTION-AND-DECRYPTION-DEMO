// Turn input text to uppercase
const CaesarCipher = document.getElementById('Caesar-Cipher');
CaesarCipher.addEventListener('input', (event) => {
    CaesarCipher.value = event.target.value.toUpperCase();
});

const CaesarCipher2 = document.getElementById('Caesar-Cipher2');
CaesarCipher2.addEventListener('input', (event) => {
    CaesarCipher2.value = event.target.value.toUpperCase();
});

const CaesarCipher3 = document.getElementById('Caesar-Cipher3');
CaesarCipher3.addEventListener('input', (event) => {
    CaesarCipher3.value = event.target.value.toUpperCase();
});


// get value from encrypt or decrypt button
const CaesarCipherEncrypt = document.getElementById('Caesar-Cipher-Encrypt');
const CaesarCipherDecrypt = document.getElementById('Caesar-Cipher-Decrypt');

// get value from input NUM to encrypt or decrypt
const CaesarCipherNum = document.getElementById('Caesar-Cipher-Num');
const CaesarCipherNumA = document.getElementById('Caesar-Cipher-NumA');
const CaesarCipherNumB = document.getElementById('Caesar-Cipher-NumB');

// get value from encrypt or decrypt button2
const CaesarCipherEncrypt2 = document.getElementById('Caesar-Cipher-Encrypt2');
const CaesarCipherDecrypt2 = document.getElementById('Caesar-Cipher-Decrypt2');
const BruteForce = document.getElementById('Caesar-Cipher-BruteForce');
const CaesarCipherEncrypt3 = document.getElementById('Caesar-Cipher-Encrypt3');
const CaesarCipherDecrypt3 = document.getElementById('Caesar-Cipher-Decrypt3');
const BruteForce3 = document.getElementById('Caesar-Cipher-BruteForce3');




// Adjust the shift value dynamically based on the button clicked
const shiftCipher = (shiftValue) => {
    const cipherValues = [...CaesarCipher.value].map(char => char.charCodeAt(0) - 65);
    const shiftedValues = cipherValues.map(value => {
        // Ensure the value is within the range of 0-25 (A-Z)
        if (value >= 0 && value < 26) {
          return (value + shiftValue +26) % 26; // Ensure positive modulo         
        } else {
          return value; // Leave spaces, punctuation, etc. unchanged
        }; 
})
const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
document.getElementById('Caesar-Cipher-Output').textContent = shiftedText;
};

CaesarCipherEncrypt.addEventListener('click', () => shiftCipher(3));
CaesarCipherDecrypt.addEventListener('click', () => shiftCipher(-3));

// Encrypt and Decrypt by input number
const shiftCipher2 = (shiftValue) => {
    const cipherValues = [...CaesarCipher2.value].map(char => char.charCodeAt(0) - 65);
    const shiftedValues = cipherValues.map(value => {
        // Ensure the value is within the range of 0-25 (A-Z)
        if (value >= 0 && value < 26) {
          return (value + shiftValue +26) % 26; // Ensure positive modulo         
        } else {
          return value; // Leave spaces, punctuation, etc. unchanged
        }; 
}); // Ensure positive modulo
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
        const shiftedValues = cipherValues.map(value => {
            // Ensure the value is within the range of 0-25 (A-Z)
            if (value >= 0 && value < 26) {
              return (value - i +26) % 26; // Ensure positive modulo         
            } else {
              return value; // Leave spaces, punctuation, etc. unchanged
            }; 
    }); // Decrypt with shift -i
        const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
        bruteForceResults += `Shift ${i}: ${shiftedText}<br>`;
    }
    document.getElementById('Caesar-Cipher-Output2').innerHTML = bruteForceResults;
};
 BruteForce.addEventListener('click', bruteForceCipher);


 // Encrypt and Decrypt by input number A B
 const shiftCipher3 = (shiftValueA, shiftValueB) => {
    const cipherValues = [...CaesarCipher3.value].map(char => char.charCodeAt(0) - 65);
    const shiftedValues = cipherValues.map(value => {
        // Ensure the value is within the range of 0-25 (A-Z)
        if (value >= 0 && value < 26) {
          return ((shiftValueA*value)+ shiftValueB +26) % 26; // Ensure positive modulo         
        } else {
          return value; // Leave spaces, punctuation, etc. unchanged
        }; 
}); // Ensure positive modulo
    const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
    document.getElementById('Caesar-Cipher-Output3').textContent = shiftedText;
};

CaesarCipherEncrypt3.addEventListener('click', () => shiftCipher3(parseInt(CaesarCipherNumA.value, 10), parseInt(CaesarCipherNumB.value, 10)));
CaesarCipherDecrypt3.addEventListener('click', () => shiftCipher3(parseInt(CaesarCipherNumA.value, 10), parseInt(-CaesarCipherNumB.value, 10)));

// Perform brute force decryption for shift values 0-26
const bruteForceCipher3 = () => {
    let bruteForceResults = '';
    for (let j = 1; j <= 26; j++) {
    for (let i = 0; i < 26; i++) {
        const cipherValues = [...CaesarCipher3.value].map(char => char.charCodeAt(0) - 65);
        const shiftedValues = cipherValues.map(value => {
            // Ensure the value is within the range of 0-25 (A-Z)
            if (value >= 0 && value < 26) {
              return ((j*value) - i +26) % 26; // Ensure positive modulo         
            } else {
              return value; // Leave spaces, punctuation, etc. unchanged
            }; 
    }); // Decrypt with shift -i
        const shiftedText = shiftedValues.map(value => String.fromCharCode(value + 65)).join('');
        bruteForceResults += `KeyA: ${j} -> KeyB: ${i} = ${shiftedText}<br>`;
    }
}
    document.getElementById('Caesar-Cipher-Output3').innerHTML = bruteForceResults;
};
 BruteForce3.addEventListener('click', bruteForceCipher3);

