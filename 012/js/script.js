/*
function createPerson (personNmae, personSurname){
    return{
        name: personNmae,
        surname: personSurname,
        info: function(){ return `${this.name} ${this.surname}`}
    }
}

let i = 0;
let masList = [];
while (i < 3){
    let surname = prompt('Введіть прізвище');
    let name = prompt('Введіть імя');
    let person = createPerson(surname, name);
    masList.push(person);
    i++;
}

for (el of masList)
{
    document.write(el.info() + '<br>');
}*/

// спитати скільки студентів я хочу ввести. Ввести ПІБ студентів
// через пропуск в одному вікні (Аф Аа Дп)
// в кінці вивести таблицю ціх студентів