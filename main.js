1)
//для чего нужен AJAX?

//Считывать данные с веб-сервера - после загрузки страницы
//Обновить веб-страницу без перезагрузки страницы
//Отправка данных на веб-сервер - в фоновом режиме

2)
//для чего нужен веб API?

//механизмы, которые позволяют двум программным компонентам взаимодействовать друг с другом, используя набор определений и протоколов.

3)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
<button id='back'>Open</button>

const back1 = document.querySelector('#back')

back1.addEventListener('click', history.back())
4)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
<button id='next'>Open</button>

const next1 = document.querySelector('#next')

next1.addEventListener('click', history.forward())

5)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы вперед в браузере при нажатии
<button id='next'>Open</button>

const next2 = document.querySelector('#next')

next1.addEventListener('click', history.go(3))

6)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы назад в браузере при нажатии
<button id='next'>Open</button>

const back1 = document.querySelector('#back')

back1.addEventListener('click', history.go(-3))
7)
//выведите в консоли локальное хранилище

console.log(localStorage);

8)
//добавьте обьект ниже в локальное хранилище под ключем 'user'
let newUser = {name: 'Alex', age: 24};

localStorage.setItem(key, newUser)

9)
//получите из локального хранилища ранее добавленные данные и выведите в консоли
console.log(localStorage.getItem(key));
10)
//для чего нужен localStorage?

//localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.

11)
//для чего нужен sessionStorage?

//localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.

12)
//добавьте обьект ниже в sessionStorage под ключем 'user'
let newUser = {name: 'Alex', age: 24};

sessionStorage.setItem(user, newUser)

13)
//получите из sessionStorage ранее добавленные данные и выведите в консоли

console.log(sessionStorage.getItem(user));

14)
//выведите в консоли все ключи из локального хранилища

console.log(localStorage.getItem(key));

15)
//выведите в консоли длину локального хранилища
console.log(localStorage.length);
16)
//удалите ранее добавленный ключ 'user' из локального хранилища

localStorage.removeItem(key)

17)
//очистите локальное хранилище

localStorage.clear(key)