const fs = require('fs/promises');
 const path = require('path');

console.log(__dirname);
console.log(__filename);

const pathFile = path.join(__dirname,'users.txt');
console.log('pathFile',pathFile);

fs.writeFile(pathFile,'name:Vasia',(err)=>{console.log(err)});
fs.writeFile(__dirname + '/users.json','Vasia',(err)=>{console.log(err)});
fs.writeFile(__dirname + '/users1.json',JSON.stringify({'name':'Vasia','age':20,'gender':'male'}),(err)=>{console.log(err)});
fs.writeFile(__dirname + '/users2.json',JSON.stringify({name:'Vasia',age:20,gender:'male'}),(err)=>{console.log(err)});

fs.copyFile()