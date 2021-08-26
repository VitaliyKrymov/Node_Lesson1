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
const dirToReadPath = path.join(__dirname, 'dir');
const folderWithDeletedData = path.join(__dirname, 'folder', 'deleter.txt');


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

//для зчитування директорії використовуємо(вертається масив назв файлів які є в середині директорії)
// fs.readdir(dirToReadPath, (err, files) => {
//     if (err) {
//         console.log(err);
//         return
//     }
    //прогоняємо циклом масив назв файлів і виводимо назву кожного окремого файлу
//     files.forEach(file => {
//         // console.log(file);
//         const filePath = path.join(dirToReadPath,file);
//     fs.stat(filePath,(err1, stats) => {
//         console.log('__________');
//         console.log(stats.isFile(),'IsFile');// виводимо статистику про file (true-false)
//         console.log(stats.isDirectory(),'IsDirectory');// виводимо статистику про Directory (true-false)
//         console.log(stats.size);
//         console.log('__________');
//     })
//     })
//     // console.log(files);
// });

//команда fs.rmdir видаляє пусту директорію
// fs.rmdir(path.join(dirToReadPath,'thisIsDer'),err => {
//     console.log(err);
// });

//команда fs.rmdir видаляє файли
// fs.unlink(path.join(__dirname,'dir','text2.txt'),err => {
//     console.log(err);
// });

//перенести (перейменувати) файл. звідки переносимо(textpath). куди переносимо(folderWithDeletedData)
// fs.rename(textpath,folderWithDeletedData,err=>{
//     console.log(err);
// });

//робимо з колбек функцій промісифіковані функції.В folderWithDeletedData будемо дописувати дані
// const util =require('util');
// const appendPromise = util.promisify(fs.appendFile);
// appendPromise(folderWithDeletedData,' TEXT DATA WITH PROMISE \n')
//     .catch(reasone =>{
//     console.log(reasone)});

//стрімінгові сервіси. Щоб пересилати великі файли потрібно розділяти файли на невеликі частини-STRIMS
//файл зчитується невеликими чанками по 64 кб.
const readStream = fs.createReadStream(folderWithDeletedData);
// також можна записувати чанками
const writeStrm = fs.createWriteStream(textpath);

console.time('STRM')//можна побачити час виконання команди
readStream.on('data',chunk => {
       writeStrm.write(chunk);//записуємо дані кусками
       // console.log(chunk)
});
console.timeEnd('STRM');//можна побачити час закінчення виконання команди

//можна передавати дані з одного стріма на інший стрім
readStream.pipe(writeStrm);//pipe -працює повільніше
console.timeEnd('STRM');

//для передачі фото їх перед загрузкою на сервер зрізають якість

//ДЗ1. в 2 папках (1800 та 2000) будуть файли json(TXT) наприклад ira.json і там будуть дані:
//{"name":"Ira","gender":"female"}
//Vasia.json
// {"name":"Vasia","gender":"male"}
//Inna.json
// {"name":"Inna","gender":"male"}
//по кілька файликів в кожній папці
//необхідні всіх дівчат перемістити в папку 1800. всіх пацанів перенести на 2000

//ДЗ2.
//Є папка subfolder з даними в файлі data.txt . в ній ще папка f2 вякій ще один файлик.
//і ще папка з файликами. вложеність різна
//необхідно всі файлики перенести в папку з вложеністю одного рівня.