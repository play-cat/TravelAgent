// split-testimonials-by-length.js

const fs = require('fs');
const path = require('path');

// Шлях до директорії з даними
const dataDir = path.join(__dirname, 'src/files/data');
const inputFile = path.join(dataDir, 'testimonials-data.json');

// Вихідні шляхи
const outputPaths = [
  path.join(dataDir, 'testimonials-col-1.json'),
  path.join(dataDir, 'testimonials-col-2.json'),
  path.join(dataDir, 'testimonials-col-3.json'),
];

// Створюємо директорію, якщо її нема
fs.mkdir(dataDir, { recursive: true }, mkdirErr => {
  if (mkdirErr)
    return console.error('❌ Помилка створення директорії:', mkdirErr);

  // Зчитуємо вхідний JSON
  fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) return console.error('❌ Помилка читання JSON:', err);

    let testimonials;
    try {
      testimonials = JSON.parse(data);
    } catch (parseErr) {
      return console.error('❌ Помилка парсингу JSON:', parseErr);
    }

    const total = testimonials.length;
    const chunkSize = Math.ceil(total / 3); // Ділимо з запасом — надлишок піде в останній

    const chunks = [
      testimonials.slice(0, chunkSize),
      testimonials.slice(chunkSize, chunkSize * 2),
      testimonials.slice(chunkSize * 2),
    ];

    chunks.forEach((chunk, index) => {
      fs.writeFile(
        outputPaths[index],
        JSON.stringify(chunk, null, 2),
        'utf8',
        err => {
          if (err) {
            console.error(`❌ Помилка запису файлу col-${index + 1}:`, err);
          } else {
            console.log(
              `✅ Збережено testimonials-col-${index + 1}.json (${
                chunk.length
              } елементів)`
            );
          }
        }
      );
    });
  });
});
