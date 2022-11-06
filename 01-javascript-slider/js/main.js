// Napisz slider

// 1. Stworz tablice, zawierajaca zrodla do 5 roznych obrazkow
// 2. Na start strony, dodaj do obrazka atrybut src z pierwszego elementu tablicy
// 3. Stworz zmienna typu number, ktora bedzie trzymala informacje, ktory jest aktualnie aktywny slajd (uzyj do tego indeksu)
// 4. Po wcisnieciu przycisku next, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na nastepny)
// 5. Po wcisnieciu przycisku prev, zmien wartosc licznika, a nastepnie zamien wartosc atrybutu src w obrazku (na poprzedni)
// 6*. Zrob obsluge karuzeli tzn. jak jestesmy na ostatnim obrazku i wcisniemy next, to pokaz pierwszy obrazek, a jak jestesmy na pierwszym obrazku i wcisniemy prev, to pokaz ostatni obrazek. Uzyj do tego zmiennej z licznikiem.


const buttonNext = document.querySelector('#buttonNext');
const buttonPrev = document.querySelector('#buttonPrev');
const img = document.querySelector('#img');
const images= ['https://kennelclub.pl/wgrane-pliki/cavalier-king-charles-spaniel1.jpeg?bg_box',
            'https://zooart.com.pl/blog/wp-content/uploads/2021/09/zywienie-cavaliera.jpg',
            'https://static.fajnyzwierzak.pl/media/uploads/media_image/original/wpis/293/cavalier-spaniel.jpg',
            'https://zooart.com.pl/blog/wp-content/uploads/2021/09/rasa-cavalier.jpg',
            'https://zwierzaki.pl/wp-content/uploads/2021/01/king-charles-spaniel.jpg'];
let counter = 0;
img.src=images[counter];

const handleSubmitNext = (event) => {
    event.preventDefault();
    if (counter < (images.length - 1)) counter++;
    else counter = 0;
    //counter++;
    //if (counter === images.length) counter = 0;
    img.src=images[counter];
    localStorage.setItem('counter', JSON.stringify(counter));
    console.log('Wciśnięto następny obraz')
}

const handleSubmitPrev = (event) => {
    event.preventDefault();
    if (counter > 0) counter--;
    else counter = (images.length - 1);
    //counter--;
    //if (counter === -1) counter = images.length - 1;
    img.src=images[counter];
    localStorage.setItem('counter', JSON.stringify(counter));
    console.log('Wciśnięto poprzedni obraz')
}

buttonNext.addEventListener('click', handleSubmitNext);
buttonPrev.addEventListener('click', handleSubmitPrev);

console.log('Koniec')



















//