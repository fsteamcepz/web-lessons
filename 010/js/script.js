function countWords()
{
    let string = prompt('Введіть речення');
    let count = 0;
    let words = string.split(' ');

    for (let i = 0; i < words.length; i++)
    {
        if(words[i] !== " ")
        {
            count++;
        }
    }
    alert(`${string}\nКількість слів = ${count}.`);
}

function sumOfNumbers()
{
    let mas = [];
    let cP = 0, cOdd = 0, sum = 0;
    let spl;

    for(let i = 0; i <= mas.length; i++)
    {
        mas[i] = +prompt('Введіть число');
        if(isNaN(mas[i]))
        {
            break;
        }
        sum += mas[i];
        if(mas[i] % 2 === 0)
        {
            cP++;
        }
        else
        {
            cOdd++;
        }
    }
    spl = mas.pop(); // видаляє NaN (ласт елемент)
    spl = mas.join(", ");

    alert(`Числа: ${spl}.\nСума чисел = ${sum}.\nКількість парних чисел = ${cP}.\nКількість непарних чисел = ${cOdd}`);
}

function searchOfEmail()
{
    let mas = ['s@gmail.com', 'p@.ua', 'masha@ukr.net'];
    let spl;

    for(let i = 3; i <= mas.length; i++)
    {
        mas[i] = prompt('Введіть пошту');
        if (mas[i] === null)                // Нічого не ввів і натиснув ОК - mas[i] === ''. Число не є цілим - Number.isInteger(+mas[i]) === false
        {
            break;
        }
        if(mas[i] === mas[i - 3] || mas[i] === mas[i - 2] || mas[i] === mas[i - 1] || mas[i] === mas[i + 1])
        {
            alert('Така електронна адреса вже зареєстрована!');
            i--;
        }
    }
    spl = mas.pop();       // видаляє ', '
    spl = mas.join(", ");
    alert(`Всі електронні адреси: ${spl}.`);
}