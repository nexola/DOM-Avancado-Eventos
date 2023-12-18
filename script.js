'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// AULA
// Selectionando elementos
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Criando e inserindo elementos
// .insertAdjacentHTML
const msg = document.createElement('div');
msg.classList.add('cookie-message');
msg.textContent = 'Utilizamos cookies para melhorar a funcionalidade.';
msg.innerHTML =
  'Utilizamos cookies para melhorar a funcionalidade. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg); // add como primeiro filho
header.append(msg); // add como último
// header.append(msg.cloneNode(true));

// header.before(msg);
// header.after(msg);

// Deletando elementos
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function (e) {
    msg.remove();
  });
