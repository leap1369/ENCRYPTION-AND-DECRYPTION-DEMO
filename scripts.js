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
const CaesarCipherEncrypt4 = document.getElementById('Caesar-Cipher-Encrypt4');
const CaesarCipherDecrypt4 = document.getElementById('Caesar-Cipher-Decrypt4');




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


 // II.I.I RSA Keygen Demo 
const encrypt = () => {
  const text = document.getElementById("Caesar-Cipher4").value.replace(/\s+/g, "").toUpperCase();
  const key = parseInt(document.getElementById("key").value);
  if (!text || isNaN(key) || key < 2) {
    alert("Please enter valid text and a key (number > 1).");
    return;
  }

  const rows = [];
  for (let i = 0; i < text.length; i += key) {
    rows.push(text.slice(i, i + key));
  }

  let encrypted = "";
  for (let col = 0; col < key; col++) {
    for (let row = 0; row < rows.length; row++) {
      if (rows[row][col]) {
        encrypted += rows[row][col];
      }
    }
  }

  document.getElementById("Caesar-Cipher-Output4").textContent = encrypted;
}
CaesarCipherEncrypt4.addEventListener('click', encrypt);


const decrypt = () => {
  const cipher = document.getElementById("Caesar-Cipher4").value.replace(/\s+/g, "").toUpperCase();
  const key = parseInt(document.getElementById("key").value);
  if (!cipher || isNaN(key) || key < 2) {
    alert("Please enter valid ciphertext and a key (number > 1).");
    return;
  }

  const numRows = Math.ceil(cipher.length / key);
  const numFullCols = cipher.length % key;
  const grid = Array(numRows).fill("").map(() => Array(key).fill(""));

  let index = 0;
  for (let col = 0; col < key; col++) {
    const rowsInCol = col < numFullCols ? numRows : numRows - 1;
    for (let row = 0; row < rowsInCol; row++) {
      if (index < cipher.length) {
        grid[row][col] = cipher[index++];
      }
    }
  }

  let decrypted = "";
  for (let row = 0; row < numRows; row++) {
    decrypted += grid[row].join("");
  }

  document.getElementById("Caesar-Cipher-Output4").textContent = decrypted;
}
CaesarCipherDecrypt4.addEventListener('click', decrypt);


//RSI Cryptography Demo

let publicKey = {};
    let privateKey = {};
    let encryptedMessage = [];

    function gcd(a, b) {
      while (b !== 0n) [a, b] = [b, a % b];
      return a;
    }

    function modInverse(e, phi) {
      let [a, b] = [phi, e];
      let [x0, x1] = [0n, 1n];
      while (b !== 0n) {
        let q = a / b;
        [a, b] = [b, a % b];
        [x0, x1] = [x1, x0 - q * x1];
      }
      return x0 < 0n ? x0 + phi : x0;
    }

    function modPow(base, exponent, modulus) {
      let result = 1n;
      base = base % modulus;
      while (exponent > 0n) {
        if (exponent % 2n === 1n) result = (result * base) % modulus;
        exponent = exponent / 2n;
        base = (base * base) % modulus;
      }
      return result;
    }

    function generateKeys() {
      const p = BigInt(document.getElementById("p").value);
      const q = BigInt(document.getElementById("q").value);
      const output = document.getElementById("output1");
      output.innerHTML = "";

      if (p <= 1n || q <= 1n) {
        output.innerHTML = "❌ Please enter prime numbers greater than 1.";
        return;
      }

      const n = p * q; 
      const phi = (p - 1n) * (q - 1n);

      let e = 3n;
      while (gcd(e, phi) !== 1n) {
        e += 2n;
      }

      const d = modInverse(e, phi);

      publicKey = { e, n };
      privateKey = { d, n };

      output.innerHTML = `
        <div class="step">✅ Chose primes: <span class="highlight">p = ${p}</span>, <span class="highlight">q = ${q}</span></div>
        <div class="step">📦 Computed n = p × q = <span class="highlight">${n}</span></div>
        <div class="step">🧮 Computed φ(n) = (p−1)(q−1) = <span class="highlight">${phi}</span></div>
        <div class="step">🔑 Chose e = <span class="highlight">${e}</span> (coprime with φ(n))</div>
        <div class="step">🧠 Computed d = e⁻¹ mod φ(n) = <span class="highlight">${d}</span></div>
        <div class="step">🔓 Public Key: <span class="highlight">(${e}, ${n})</span></div>
        <div class="step">🔐 Private Key: <span class="highlight">(${d}, ${n})</span></div>
      `;
    }

    function encryptRSI() {
      const message = document.getElementById('message').value.toUpperCase();
      const { e, n } = publicKey;
      const output = document.getElementById('output2');

      if (!e || !n) {
        output.textContent = "❌ Generate keys first!";
        return;
      }

      encryptedMessage = [...message].map(char => {
        const code = BigInt(char.charCodeAt(0));
        return modPow(code, e, n);
      });

      const display = encryptedMessage.map(code => code.toString().padStart(4, '0')).join(' ');
      output.textContent = `🔒 Encrypted: ${display}`;
    }

    function decryptRSI() {
      const { d, n } = privateKey;
      const output = document.getElementById('output2');

      if (!d || !n || encryptedMessage.length === 0) {
        output.textContent += "\n❌ Missing encrypted message or keys.";
        return;
      }

      const decrypted = encryptedMessage.map(code => {
        const plain = modPow(code, d, n);
        return String.fromCharCode(Number(plain));
      }).join('');

      output.textContent += `\n🔓 Decrypted: ${decrypted}`;
    }