/*1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.*/

/*let list = [
    {product: "cake",  qty: 10, bought: true,},
    {product: "milk",  qty: 3, bought: false,},
    {product: "tea",  qty: 2, bought: true,},
    {product: "meat",  qty: 1, bought: false,},
    

]
//- Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
list.sort((a)=> (a.bought==false ? -1: 0));//начал смотреть со второй строки, два раза последнюю и ни разу первую???????
console.log(list);*/

/*function sort (a) {
    if (a.bought==false) return -1;// это просто вторая версия стрелочной ф-ции, кот.выше
    else return 1; 
}
list.sort(sort);
console.log(list);*/

//- Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, 
//необходимо увеличивать количество в существующей покупке, а не добавлять новую.
/*list.unshift({product: "milk",  qty: 2, bought: true,});

for (let i=1; i<list.length; i++) {
if (list[i].product==list[0].product) {
list[i].qty=list[i].qty+list[0].qty;
list.shift();
break;
}
}
console.log(list);

//- Покупка продукта. Функция принимает название продукта и отмечает его как купленный.
let productIsBought = prompt("что купили?");

for (let i=0; i<list.length; i++) {
    if (list[i].product==productIsBought) {
        list[i].bought=true;
    break;
    }
    }

console.log(list);*/
//console.log(list.find((a)=>{a.product==productIsBought? a.bought=true: })); //как правильно написать такую стрелочную ф-ю?

/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены 
за единицу товара. Написать следующие функции:*/

//Распечатка чека на экран; // не поняла что делать

//Подсчет общей суммы покупки;
/*let check = [
    {product:"beer", qty:4, price:20,},
    {product:"snacks", qty:5, price:10,},
    {product:"fish", qty:3, price:40,},
    {product:"water", qty:2, price:15,},

]

let sum=0;
for (let i=0; i<check.length; i++) {
    sum+=check[i].qty*check[i].price;
}
console.log(sum); 

//Получение самой дорогой покупки в чеке;
let is_expensive=0;
for (let i=0; i<check.length; i++) {
    
    a=check[i].qty*check[i].price;
  if (a>is_expensive) {
    is_expensive=a;
  };
}
console.log(is_expensive);

//Подсчет средней стоимости одного товара в чеке.
let total_qty=0;
for (let i=0; i<check.length; i++) {
    total_qty+=check[i].qty;
}
console.log(total_qty);
let middle_price = sum/total_qty;
console.log(middle_price);*/

/*4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и 
названия факультета, для которого она предназначена. Написать несколько функций для работы с ним^
*/

/*let beetroot = [
  { classroom: "big_room", number_of_seats: 15, course: "designer" },
  { classroom: "small_room", number_of_seats: 10, course: "front_end" },
  { classroom: "cabinet", number_of_seats: 20, course: "cofee" }
];*/
//- Вывод на экран всех аудиторий;
/*let beetroot_classroom = [];
for (i=0; i<beetroot.length; i++) {
    beetroot_classroom[i]=beetroot[i].classroom;
}
alert(beetroot_classroom);

//- Вывод на экран аудиторий для указанного факультета;
let beetroot_cource=(prompt("введите название факультета, чтобы узнать в какой аудитории занятия", "designer"));
for (i=0; i<beetroot.length; i++) {
    if (beetroot_cource==beetroot[i].course) {
    alert(beetroot[i].classroom)
    }
}*/
//- Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия,
// количества студентов и названия факультета;

/*let group = [
  { name: "group_a", Qty: 12, course: "designer" },
  { name: "group_b", Qty: 9, course: "front_end" },
  { name: "group_c", Qty: 19, course: "cofee" }
];

let what_is_group = prompt("как называется ваша группа?", "group_a");
for (i = 0; i < group.length; i++) {
  if (what_is_group == group[i].name) {
    let a = group[i].Qty;
    console.log(a);
    for (i = 0; i < beetroot.length; i++) {
      if (a <= beetroot[i].number_of_seats) {
        alert(`Вам подойдет  ${beetroot[i].classroom}`);
      }
      
    }
  }
}*/

//- Функция сортировки аудиторий по количеству мест;
/*beetroot.sort((a, b)=>a.number_of_seats-b.number_of_seats);
console.log(beetroot);*/

//- Функция сортировки аудиторий по названию (по алфавиту).
/*function sort_classroom (a, b) {
if (a.classroom>b.classroom)
return 1;
if (a.classroom<b.classroom)
return -1;
else return 0;
}
beetroot.sort(sort_classroom);
console.log(beetroot);*/

/*beetroot.sort((a,b)=>a.classroom>b.classroom? 1 : -1); // то же, что выше, про 0 не написала, все равно работает,даже если добавить полностью такую же строку
console.log(beetroot);*/
