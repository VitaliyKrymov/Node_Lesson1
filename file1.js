function test(){
    console.log('CALL')}
test();
console.log(__dirname);// текущий путь к папке
console.log(__filename);// текущий файл
// код вище також запускається при запуску файла
module.exports = {
    greeting: function (name) {
        console.log('file1.js work')
        console.log('Hello ',name)
}
}
