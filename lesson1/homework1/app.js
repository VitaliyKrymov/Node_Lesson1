const fs = require('fs/promises');
const path = require('path');
const express = require('express');


fs.mkdir('./boys', (err) => {
    console.log(err)
});
fs.mkdir('./girls', (err) => {
    console.log(err)
});
fs.mkdir('./students', (err) => {
    console.log(err)
});

fs.writeFile('./students/Olia.json', JSON.stringify({name: 'Olia', age: 20, gender: 'female'}), (err) => {
    console.log(err)
});
fs.writeFile('./students/Sergey.json', JSON.stringify({name: 'Sergey', age: 21, gender: 'male'}), (err) => {
    console.log(err)
});
fs.writeFile('./students/Oleg.json', JSON.stringify({name: 'Oleg', age: 22, gender: 'male'}), (err) => {
    console.log(err)
});
fs.writeFile('./students/Katia.json', JSON.stringify({name: 'Katia', age: 19, gender: 'female'}), (err) => {
    console.log(err)
});
fs.writeFile('./students/Uriy.json', JSON.stringify({name: 'Uriy', age: 20, gender: 'male'}), (err) => {
    console.log(err)
});


const foo = async () => {
    const folderPath = path.join(__dirname, 'students');
    // const folderPath = __dirname+'/students';

    const files = await fs.readdir(folderPath);

    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const data = await fs.readFile(filePath);

        const user = JSON.parse(data + '');

        if (user.gender === 'male') {
            await fs.rename(filePath, path.join(__dirname, 'boys', file))
        } else {
            await fs.rename(filePath, path.join(__dirname, 'girls', file))
        }
    }
}
foo()


