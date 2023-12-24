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
+ `links`: содержит коллекцию всез ссылок документа
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