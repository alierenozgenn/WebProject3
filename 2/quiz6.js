const fs = require('fs');

// Dosyayı oku
fs.readFile('quiz6.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Dosya okunamadı:", err);
        return;
    }

    // Satırları ayır
    const lines = data.trim().split('\n');

    lines.forEach(line => {
        // Satırdaki sayıları ayır
        const [x, a, b, c] = line.split(',').map(Number);

        // Polinom hesabı
        const result = a * Math.pow(x, 2) + b * x + c;

        // Sonucu ekrana yazdır
        console.log(`x=${x}, a=${a}, b=${b}, c=${c} için A = ${result}`);
    });
});
