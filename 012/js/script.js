function computerDetails()
{
    function createDetail (idDetail, detailName, costOfDetail){
        return{
            id: idDetail,
            name: detailName,
            price: costOfDetail
        }
    }

    let mas = [];
    let answer;

    answer = +prompt('Введіть кількість деталей');

    if (answer === 0 || answer == null)
    {
        alert(`До побачення!`);
    }
    else
    {
        if(isNaN(answer))
        {
            alert(`Помилка. Ви ввели символ!`);
        }
        if (+answer < 0)
        {
            alert(`Помилка. Ви ввели від'ємне число!`);
        }
        else
        {
            for (let i = 0; i < answer; i++)
            {
                let id = i + 1;
                let cost, name;
                let nameCost = prompt('Введіть назву та вартість');

                let words = nameCost.split(' ');

                // знайти останній пропуск
                name = numberOfPasses(nameCost);
                cost = words[words.length - 1];
                
                mas[i] = createDetail(id, name, cost);
            }
            document.querySelector('.wrap').innerHTML = `<table class="detail"></table>`;
            let row = document.createElement('tr');
            row.innerHTML = `<th>№</th><th>Назва деталі</th><th>Вартість, грн.</th>`;
            document.querySelector('.detail').appendChild(row);

            for(let j = 0; j < mas.length; j++)
            {
                let row2 = document.createElement('tr');
                row2.innerHTML = `
                <td>${mas[j].id}</td>
                <td>${mas[j].name}</td>
                <td>${mas[j].price}</td>
                `;
                document.querySelector('.detail').appendChild(row2);
            }
            minD();   // найдешевша деталь
        }
    }

    function numberOfPasses(string)
    {
        let str = string;
        let words = str.split(' ');
        let count = 0;
        
        for(let i = 0; i < str.length; i++)
        {
            if(str[i] === " ")
            {
                count++;
            }
        }
        
        let mas = [];
        
        for(let j = 0; j < words.length; j++)
        {
            if(words[j] === words[count])
            {
                break;
            }
            else
            {
                mas[j] = words[j];
            }
        }
        let spl = mas.join(' ');    // зберігає назву без ком
        return spl;
    }

    function minD()
    {
        let min = mas[0].price;
        for(let i = 0; i < mas.length; i++)
        {
            if(mas[i].cost < min)
            {
                min = mas[i].price;
            }
        }
        let row3 = document.createElement('tr');
        row3.innerHTML = `
        <td colspan="2" style="text-align:right">Найдешева деталь:</td>
        <td>${min}</td>
        `;
        document.querySelector('.detail').appendChild(row3);
    }
}