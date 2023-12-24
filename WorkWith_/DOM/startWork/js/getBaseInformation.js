console.log(document.title);
console.log(document.lastModified);
console.log(document.URL);
console.log(document.body);

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