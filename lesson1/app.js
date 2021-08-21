const filedata = require('./dir/file1');
// console.log(filedata)
const folder = require('./folder/file2');
const folder1 = require('./folder');//запускає index.js -хоча він не вказаний
filedata.greeting('Vitalii');

console.log(__dirname);//це вже оголошені глобальні змінні текущий путь к папке
console.log(__filename);// текущий файл

const fs = require('fs');// ф-ї для роботи з файловою системою
const path = require('path');//path -вміє будувати шляхи до файлу
const textpath = path.join(__dirname, 'dir', 'text.txt');
const textpath2 = path.join(__dirname, 'dir', 'text.txt');

console.log(textpath);
//writeFile  повністю перезаписує файл і всю інфу
// fs.writeFile(textpath,'HELLO VITALIY',err => {
//     console.log(err);
// });

//для додавання інформації використовуємо appendFile
// fs.appendFile(textpath,' , age 47',err => {
//     if (err){
//         console.log(err);
//     return
//     }
//     console.log('DONE')
// });

// для створення нової папки використовуємо fs.mkdir,опція {recursive:true} робить папки рекурсивно- одна за одною
// const mkDirPath=path.join(__dirname,'dir','folder2','innerFolder','HellXXX');
// fs.mkdir(mkDirPath,{recursive:true},err => {
//     console.log(err);
// });

//для читання інфи з файлу використовуємо fs.readFile(),вертається машинний код
//для перетворення її в стрінгу використ ф-ю toString
// fs.readFile(textpath, (err, data) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     fs.appendFile(textpath2,data,err1 =>{
//     } );// записуємо інфу в файл
//     console.log(data.toString());
// });

//для зчитування директорії використовуємо
fs.readdir(,);
