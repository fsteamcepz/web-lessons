function mb_calculation() {
    let megabyte = prompt('Введіть МБ');
    let mbyte = 8000000;
    let gb = 0.001;
    let mbit = 8;

    alert(megabyte + ' MB = ' + megabyte*mbyte + ' бітів.');
    alert(megabyte + ' MB = ' +  megabyte*gb +' ГБ.');
    alert(megabyte + ' MB = ' + megabyte*mbit +' Мбіт');

    console.log(megabyte + ' MB = ' + megabyte*mbyte + ' бітів.');
    console.log(megabyte + ' MB = ' +  megabyte*gb +' ГБ.');
    console.log(megabyte + ' MB = ' + megabyte*mbit +' Мбіт');
}

function get_price() {
    let price = prompt('Введіть ціну товару');
    let count = prompt('Введіть кількість');
    let grn = 1000;
    let discount = 0.05;

    if(price < 0){
        alert('Помилка, вартість не може бути від"ємною');
    }
    else if(price <= grn){
        alert('Вартість товару складає ' + count*price + ' грн.');
        console.log('Вартість товару складає ' + count*price + ' грн.');
    }
    else {
        alert('Чудова новина! Вартість товару  зі знижкою складає ' + (count*price-(discount * grn)) + ' грн.');
        console.log('Чудова новина! Вартість товару  зі знижкою складає ' + (count*price-(discount * grn)) + ' грн.');
    }
}