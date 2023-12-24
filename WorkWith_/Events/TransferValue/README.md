# Объект Event

При обработке события, браузер передает в обработчик параметр **Event**,
который инкапсулирует всю информацию о событии. 

Свойтва **Event**:
+ `bubbles`: возвращает true, если событие является восходящим. Например, если событие возникло на вложенном элементе, то оно может быть обработано на родительском элементе.
+ `cancelable`: возвращает true, если можно отменить стандартную обработку события 
+ `currentTarget`: определяет элемент, к которому прикреплен обработчик события
+ `defaultPrevented`: возвращает true, если был вызван у объекта Event метод `preventDefault()`
+ `eventPhase`: хранит число, которое представляет стадию обработки события, например:
  + 0 (Event.NONE)
  + 1 (Event.CAPTURING_PHASE)
  + 2 (Event.AT_TARGET)
  + 3 (Event.BUBBLING_PHASE)
+ `target`: указывает на элемент, на котором было вызвано событие
+ `timeStamp`: хранит время возникновения события
+ `type`: указывает на имя тип события
+ `isTrusted`: указывает, событие было сгенерировано элементами веб-страницы или кодом JavaScript

### Остановка выполнения события 
С помощью метода `preventDefault()` объекта Event мы можем остановить дальнейшее выполнение события. В ряде случаев этот метод не играет большой роли. Однако в некоторых ситуаций он может быть полезен. Например, при нажатии на ссылку мы можем с помощью дополнительной обработки определить, надо ли переходить по ссылке или надо запретить переход. Или другой пример: пользователь отправляет данные формы, но в ходе обработки в обработчике события мы определили, что поля формы заполнены неправильно, и в этом случае мы также можем запретить отправку.

К примеру остановим переход по ссылке:
```js
function linkToMyProfile(e)
{
    if (selectYou.value == 'person') {
        e.preventDefault();
    }
    if (e.defaultPrevented) console.log("Your is not software!");
}

let link1 = document.getElementById('link1');
link1.addEventListener('click',linkToMyProfile);
```
**html-документ**:
```html
<body>
    <input type="text" id="text_user"/>
    <button id="buttonTransfer">Read</button>
    <br/><br/>
    <a id="link1" href="https://github.com/IgorPetrovcm">My Github<a> 
    <br />
    <select id="who_are_you">
        <option name="software" value="software">I'm Software</option>
        <option name="person" value="person">I'm person</option>
    </select>
    <script src="js/main.js"></script>
</body>
```