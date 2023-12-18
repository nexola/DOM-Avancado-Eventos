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

// Estilos
msg.style.backgroundColor = '#37383d';
msg.style.width = '120%';

console.log(msg.style.backgroundColor);
console.log(getComputedStyle(msg).color);

msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Atributos
const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Logo minimalista';

console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'bankist');
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Atributos data
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Scroll suave
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log('Posição atual do scroll (X/Y)', window.scrollX, window.scrollY);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrollando
  // window.scrollTo(s1coords.left, s1coords.top + window.scrollY + 120);
  // Maneira antiga
  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY + 120,
  //   behavior: 'smooth',
  // });

  // Maneira nova
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Procando a função uma única vez
const alertH1 = function (e) {
  alert('addEventListener: Great! You are reading the heading');
};

// Tipos de eventos e event handlers
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// Jeito antigo
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };
