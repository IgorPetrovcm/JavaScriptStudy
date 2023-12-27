# Введение в DOM

**DOM** - это дерево элементов **html-документа**, состоящий из иерархически связанных узлов:
![Alt text](image.png)

Существуют следующие типы узлов, каждый из который(вроде) представляет свой объект в **JavaScript**. Выделим самые существенные:
+ **Document**: представляет весь **html-документ**
+ **Element**: **html-элемент**
+ **Text**: текст элемента
+ **Attr**: атрибут элемента
 
# Свойства объекта document

Для работы со структорой **DOM** в **JavaScript** предназначен объект `document`. Вот ряд его свойтв для получения базовой информации:
+ `title`: возвращает заголовок документа 
+ `lastMidified`: содержит дату последнего изменения документа
+ `URL`: содержит **URL-адрес** текущего документа
+ `domain`: содержит домен текущего документа
+ `documentElement`: возвращает доступ к корневому элементу `<html>`
+ `body`: возвращает доступ к элементу `body`
+ `head`: анлогично, но `<head>`
+ `cookie`: содержит коллекцию всех куки для текущего документа
+ `images`: содержит коллекцию всех элементов `img` документа
+ `links`: содержит коллекцию всех ссылок документа типа `<a>` и `<area>` у которых определен атрибут `href`
+ `anchors`: содержит коллекцию елементов `<a>`, у которых определен атрибут `name` 
+ `forms`: содержит коллекцию всех форм документа
  
Получить базовые свойства:
```js
console.log(document.title);
console.log(document.lastModified);
console.log(document.URL);
console.log(document.body);
```

Добавим в **html-документ** 3 изображения:
```html
<img src="images/DOMTree.png" alt="random_image1" />
<img src="images/random1.png" alt="random_image2" />
<img src="images/random2.png" alt="random_image3" />
```
В скрипте поменяем их аттрибуты, и перебирем:
```js
//Получим изображения в виде коллекции
let images = document.images;
//Изменим изображения, поменяв ссылки местами
images[1].src = "images/random2.png";
images[1].alt = "update1";
images[2].src = "images/random1.png";
images[2].alt = "update2";
//перебирем все изображения, указав их путь и alt
for (image of images){
    console.log(`path: "${image.src}"  alt: "${image.alt}"`);
}
```

## Поиск элементов на веб-странице

Объект `document` предоставляет ряд методов для поиска **элементов**:
+ `getElementById(value)`: находит элемент с заданным в `value` `id` элемента
+ `getElementByTagName(value)`: возвращает коллекцию(`NodeList`) элементов, заданным в `value` тегом элемента
+ `getElementByClassName(value)`: возвращает коллекцию(`NodeList`) элементов, заданным в `value` классом элемента
+ `getElementByName`: возвращает коллекцию(`NodeList`) элементов, заданным в `value` именем элемента 

```js
let elements_name = document.getElementsByName('2');

for (el of elements_name)
{
    console.log(el);
}
//или

let p = document.getElementsByName('2')[1];
console.log(p);

let input = document.getElementsByName('2')[0];
console.log(input);

let div = document.getElementsByName('2')[2];
console.log(div);
```

```js
let input_elements = document.getElementsByTagName('input');

for (el of input_elements) 
{
    console.log(el);
}

let inputFirst = input_elements[0];
console.log(inputFirst);
//Также
let input_elementFirst = document.getElementsByTagName('input')[0];
console.log(input_elementFirst);

```
