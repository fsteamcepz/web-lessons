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
    while(1)
    {
        let email = prompt('Введіть пошту');
        if(email === null)
        {
            break;
        }
        else
        {
            // додати перевірку на емейл (регулярні вирази)...
            if(mas.indexOf(email) === -1)               // або if(!mas.find(element => (element == email)))
            {
                mas.push(email);
            }
            else
            {
                alert('Така електронна адреса вже зареєстрована!');
            }
        }
    }
    let spl = mas.join(", ");
    alert(`Всі електронні адреси: ${spl}.`);
}