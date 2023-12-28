# Подмеченно во время работы над практикой
_____

Чтобы создать объект, представляющий определенный тег:
```js
let tagObject = document.createElement('div' | 'table' | 'form')// и так далее 
```
##### Ключевой метод - `createElement`
___

Чтобы добавить объект, тег, в документ:
```js
document.body.append(tagObject);
//или
document.head.append(tagObject);
```
##### Ключевой метод - `append()`, 
___

Чтобы добавить объект, как дочерний узел:
```js
let table = document.getElementById("table");

let trObject = document.createElement('tr');

table.appendChild(trObject)
```
##### Ключевой метод - `appendChild()`
___
Чтобы узнать сколько дочерних узлов у объекта:
```js
let table = document.getElementById("table");

console.log(table.children.length);
```
##### Ключевое свойство - `children`, и его свойство `length`
___
Проверку на число можно сделать с помощью `isNaN`: возвращает **false** если это число.
```js
if (isNaN(this.value))
{
    error_small.innerText = 'Input not number';

    this.parentElement.appendChild(error_small);

    return;
}
```
##### Проверка на является ли строка числом
