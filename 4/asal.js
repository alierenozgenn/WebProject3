const fs = require('fs');

// 1 ile 100 arasındaki asal sayıları bulan fonksiyon
function findPrimeNumbers(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

// Asal sayıları bul
const primeNumbers = findPrimeNumbers(100);

// Asal sayıları asal.txt dosyasına yaz
fs.writeFile('asal.txt', primeNumbers.join(', '), (err) => {
    if (err) throw err;
    console.log('Asal sayılar asal.txt dosyasına başarıyla yazıldı.');
});
