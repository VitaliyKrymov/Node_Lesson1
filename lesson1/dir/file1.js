// function test(){
//     console.log('CALL')}
// test();
// код вище назовні не експортується. але він запускається!!!
// код вище також запускається при запуску файла

//module-це наш файл.exports-заекспортуй ф-ю. експорту вати можна тільки щось одне(масив і т.д.)
module.exports = {
    greeting: function (name) {
        console.log('file1.js work')
        console.log('Hello ',name)
}
};

