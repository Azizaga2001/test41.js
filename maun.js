1)
//что выведет в консоли console.log(Boolean(10 > 9))
//true
2)
//что выведет в консоли console.log(Boolean(10 < 9))
//false
3)
//что выведет в консоли скрипт ниже
if (1 == 2) {
    console.log(true);
} else {
    console.log(false);
}

//false

4)
//что выведет в консоли скрипт ниже
if (1 < 2) {
    console.log(true);
} else {
    console.log(false);
}

//true

5)
//что выведет в консоли скрипт ниже
if (1 > 2) {
    console.log(true);
} else {
    console.log(false);
}

//false

6)
//что выведет в консоли скрипт ниже
let x = 0;
console.log(Boolean(x));

//false

7)
//что выведет в консоли скрипт ниже
let x = -0;
console.log(Boolean(x));

//false

8)
//что выведет в консоли скрипт ниже
let x = "";
console.log(Boolean(x));

//false

9)
//что выведет в консоли скрипт ниже
let x;
console.log(Boolean(x));

//false

10)
//что выведет в консоли скрипт ниже
let x = null;
console.log(Boolean(x));

//false

11)
//что выведет в консоли скрипт ниже
let x = false;
console.log(Boolean(x));

//false

12)
//что выведет в консоли скрипт ниже
let x = 10 / "H";
console.log(Boolean(x));

//false

13)
//перечислите логические операторы
//эквивалентности - ==
//неравенства — != 
//отрицания — !
//И — &&
//исключающее ИЛИ — ^
//ИЛИ — ||
14)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}

//false

15)
//что выведет в консоли скрипт ниже
if (1 > 2 && 2 < 3 || "hello".length < 4) {
    console.log(true);
} else {
    console.log(false);
}

//false

16)
//что выведет в консоли скрипт ниже
if (1 > 2 || 2 < 3 || "hello".length != 4) {
    console.log(true);
} else {
    console.log(false);
}

//true

17)
//создайте структуру ниже с помощью if, else, else if
let money = 10;
/*
 если money больше или равно 5-ти, то вывести в консоли 'Я куплю пирог',
 иначе если money меньше 5-ти и больше 1, то вывести в консоли 'Мало денег',
 иначе вывести в консоли 'Денег нет'
*/
if (money > 5 || money == 5) {
    console.log('Я куплю пирог');
} else if (money < 5 && money > 1) {
    console.log('Мало денег');
} else {
    console.log('Денег нет');
}
18)
//превратите скрипт ниже в switch
let day = new Date().getDay();

if (day == 1) {
    console.log('Monday');
} else if (day == 2) {
    console.log('Tuesday');
} else if (day == 3) {
    console.log('Wednesday');
} else if (day == 4) {
    console.log('Thursday');
} else if (day == 5) {
    console.log('Friday');
} else {
    console.log('Break Time!');
}

//?


let num = '654765fdfds';

if (/\s/g.test(num) || /[a-zA-Z]/g.test(num)) {
    console.log(false)
}