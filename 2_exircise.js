// Задание 1.

// Напишите функцию, которая принимает в качестве аргумента объект и 
// выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

function printOwnProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`);
        }
    }
}

// Пример использования функции
let myObj = {
    a: 1,
    b: 2,
    c: 3
};

printOwnProperties(myObj);

// Эта функция использует метод hasOwnProperty для проверки, 
// является ли свойство собственным свойством объекта. Если это так, 
// то она выводит ключ и значение этого свойства в консоль.




// Задание 2.

// Напишите функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.

function hasProperty(name, obj) {
    return obj.hasOwnProperty(name);
}

// Пример использования функции
let myObj = {
    a: 1,
    b: 2,
    c: 3
};

console.log(hasProperty('a', myObj)); // true
console.log(hasProperty('d', myObj)); // false

// Эта функция использует метод hasOwnProperty для проверки, 
// есть ли у объекта свойство с данным именем. Если свойство 
// существует, функция возвращает true, иначе false.




// Задание 3.

// Напишите функцию, которая создает пустой объект, но без прототипа.

function createEmptyObjectWithoutPrototype() {
    let obj = Object.create(null);
    return obj;
}

let obj = createEmptyObjectWithoutPrototype();
console.log(obj); // {}

// В этом коде мы используем метод Object.create с аргументом null, 
// чтобы создать новый объект без прототипа. Затем мы возвращаем этот 
// объект из функции.