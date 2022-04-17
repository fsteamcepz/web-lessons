function costCalculation()
{
    let name, price, count;
    let cost, answer = true;

    while(answer)
    {
        name = prompt('Введіть назву товару');
        price = +prompt('Введіть ціну товару (грн.)');
        count = +prompt('Введіть кількість');
        
        cost = costCal(name, price, count);
        alert(cost.info());

        answer = prompt('Бажаєте додати ще товар? (y/n)');
        if (answer === "n" || answer === "N")
        {
            answer = false;
        }
    }

    function costCal(nameGoods, priceGoods, countGoods){
        return{
            name: nameGoods,
            price: priceGoods,
            count: countGoods,
            info: function(){ return `Товар ${this.name}, ${count} шт., коштує ${price*count} грн.`}
        }
    }
}