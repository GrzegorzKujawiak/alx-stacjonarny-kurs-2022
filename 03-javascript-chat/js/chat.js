// Stworz aplikacje chat

import { getMessages } from "./gettingLS.js";
import { setMessages } from "./settingLS.js";

// Stworz aplikacje chat, ktora zawiera okno chatu i formularz wpisywania wiadomosci.

// 1. Formularz powinien miec 2 inputy, pole author i pole message
// 2. Okno chatu, powinno wyswietlac wyslane wiadomosci wraz z jego autorem
// 3. Wiadomosci zapisz jako tablica obiektow i umiesc je w localStorage
// 4. Po wejsciu na strone, przeczytaj wiadomosci z localStorage i wyswietl w oknie chatu

// * Dodatkowe

// 5. Nad oknem chatu, zrob header z searchem (input + przycisk search). Po wcisnieciu przycisku, przefiltruj wiadomosci. Filtruj tylko po message.
// 6. Ostyluj zadanie zeby przypominalo realny chat :)
// 7. Odczytywanie i zapisywanie do localStorage stworz jako osobne funkcje, zapisz je w osobnych plikach i zaimportuj do glownego pliku chat.js


const form = document.querySelector('#formChat');
const inputAuthor = document.querySelector('#inputAuthor');
const inputMessage = document.querySelector('#inputMessage');
const buttonSend = document.querySelector('#buttonSend');
const listMessages = document.querySelector('#listMessages');
const inputSearch = document.querySelector('#inputSearch');
const buttonSearch = document.querySelector('#buttonSearch');


/*let messages = JSON.parse(localStorage.getItem('messages'));
if(messages === null) {
    messages = [];
}*/
let messages = getMessages();
listMessages.innerHTML = `<li> Autor: Wiadomość </li>`;
messages.forEach(message => {
  listMessages.innerHTML+=`<li>${message.author}: ${message.content}</li>`
})
console.log('Wczytano z localstarage');

const handleButtonSend = (event) => {
    event.preventDefault();
    let newMessage ={
      author: inputAuthor.value,
      content: inputMessage.value
    } 
    messages.push(newMessage);
    listMessages.innerHTML = `<li> Autor: Wiadomość </li>`;
    messages.forEach(message => {
      listMessages.innerHTML+=`<li>${message.author}: ${message.content}</li>`
    });
    inputAuthor.value='';
    inputMessage.value='';
    //localStorage.setItem('messages', JSON.stringify(messages));
    setMessages(messages);
}

const handleButtonSearch = (event) => {
    event.preventDefault();
    let searchingPhrase = inputSearch.value;
    listMessages.innerHTML = `<li> Autor: Wiadomość </li>`;
    messages.filter(message =>{
        return message.content.toLowerCase().includes(searchingPhrase.toLowerCase());
    })
    .forEach(message => {
      listMessages.innerHTML+=`<li>${message.author}: ${message.content}</li>`
    });
    inputSearch.value ='';
} 

buttonSend.addEventListener('click', handleButtonSend);
buttonSearch.addEventListener('click', handleButtonSearch)