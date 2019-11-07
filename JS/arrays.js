/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.

- Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
- Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
- Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

let list = [
    {product: "cake",  qty: 10, bought: true,},
    {product: "milk",  qty: 3, bought: false,},
    {product: "tea",  qty: 2, bought: true,},
    {product: "meat",  qty: 1, bought: false,},
    

]
/*list.sort((a)=> (a.bought==false ? -1: 0));//начал смотреть со второй строки, два раза последнюю и ни разу первую???????
console.log(list);*/

/*function sort (a) {
    if (a.bought==false) return -1;
    else return 1; 
}
list.sort(sort);
console.log(list);*/

/*list.unshift({product: "milk",  qty: 2, bought: true,});

for (let i=1; i<list.length; i++) {
if (list[i].product==list[0].product) {
list[i].qty=list[i].qty+list[0].qty;
list.shift();
break;
}
}
console.log(list);*/

let productIsBought = prompt("что купили?");

for (let i=0; i<list.length; i++) {
    if (list[i].product==productIsBought) {
        list[i].bought=true;
    break;
    }
    }

console.log(list);
//console.log(list.find((a)=>{a.product==productIsBought? a.bought=true: })); //как правильно написать такую стрелочную ф-ю?



