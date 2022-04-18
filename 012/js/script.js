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
                let name = prompt('Введіть назву');
                let cost = +prompt('Введіть вартість');
                if(isNaN(cost))
                {
                    alert('Ви ввели символ!');
                    cost = +prompt('Введіть вартість');
                }
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

    function minD()
    {
        let min = mas[0].price;
        for(let i = 1; i < mas.length; i++)
        {
            if(mas[i].price < min)
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