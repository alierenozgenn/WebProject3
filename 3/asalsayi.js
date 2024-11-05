const fs = require('fs');

function tamamlaTumSayilar() {
    const asalSayilar = fs.readFileSync('asal_sayi.txt', 'utf-8')
        .split('\n')
        .map(Number)
        .filter(num => !isNaN(num)); 

    const tumSayilar = [];
    for (let i = 1; i <= 90; i++) {
        // Sayı asal listede varsa "asal", yoksa "asal değil" olarak ekle
        if (asalSayilar.includes(i)) {
            tumSayilar.push(`${i} (asal)`);
        } else {
            tumSayilar.push(`${i} (asal değil)`);
        }
    }

    // Tüm sayıları tum_sayilar.txt dosyasına yaz
    fs.writeFileSync('tum_sayilar.txt', tumSayilar.join('\n'));
    console.log('Tüm sayılar tum_sayilar.txt dosyasına kaydedildi.');
}

// Fonksiyonu çalıştır
tamamlaTumSayilar();
