function mb_calculation() {
    let megabyte = +prompt('Введіть МБ');
    let mbyte = 8000000;
    let gb = 0.001;
    let mbit = 8;

    alert(`${megabyte} MB = ${megabyte*mbyte} бітів.`);
    alert(`${megabyte} MB = ${megabyte*gb} ГБ.`);
    alert(`${megabyte} MB = ${megabyte*mbit} Мбіт`);

    console.log(`Вхідні дані: ${megabyte} МБ`);
    console.log(`${megabyte} MB = ${megabyte*mbyte} бітів.`);
    console.log(`${megabyte} MB = ${megabyte*gb} ГБ.`);
    console.log(`${megabyte} MB = ${megabyte*mbit} Мбіт`);
}

function get_price() {
    let price = +prompt('Введіть ціну товару');
    let count = +prompt('Введіть кількість');
    let grn = 1000;
    let discount = 0.05;

    if(isNaN(price)){
        alert(`Помилка, ви ввели символ`);
    }
    if(isNaN(count)){
        alert(`Помилка, ви ввели символ`);
    }
    else if(price < 0){
        alert(`Помилка, вартість не може бути від'ємною`);
    }
    else if(count < 0){
        alert(`Помилка, кількість не може бути від'ємною`);
    }
    else
    {
        if(price <= grn)
        {
            console.log(`Вхідні дані: ${price}, ${count}`);
            console.log(`Вартість товару складає ${count*price} грн.`);
            alert(`Вартість товару складає ${count*price} грн.`);
        }
        else
        {
            console.log(`Вхідні дані: ${price}, ${count}`);
            console.log(`Чудова новина! Вартість товару  зі знижкою складає ${count*price-(discount * grn)} грн.`);
            alert(`Чудова новина! Вартість товару  зі знижкою складає  ${count*price-(discount * grn)} грн.`);
        }
    }
}