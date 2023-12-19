'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

// Navegação da página - delegação de evento
// 1. adicionar o event listener
// 2. determinar qual elemento originou o evento
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

///////////////////////////////
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
// const msg = document.createElement('div');
// msg.classList.add('cookie-message');
// msg.textContent = 'Utilizamos cookies para melhorar a funcionalidade.';
// msg.innerHTML =
//   'Utilizamos cookies para melhorar a funcionalidade. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(msg); // add como primeiro filho
// header.append(msg); // add como último
// header.append(msg.cloneNode(true));

// header.before(msg);
// header.after(msg);

// Deletando elementos
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (e) {
//     msg.remove();
//   });

// Estilos
// msg.style.backgroundColor = '#37383d';
// msg.style.width = '120%';

// console.log(msg.style.backgroundColor);
// console.log(getComputedStyle(msg).color);

// msg.style.height =
//   Number.parseFloat(getComputedStyle(msg).height, 10) + 30 + 'px';

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
btnScrollTo.addEventListener('click', function (e) {
  section1.scrollIntoView({ behavior: 'smooth' });
});

// Procando a função uma única vez
// const alertH1 = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

// Tipos de eventos e event handlers
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', alertH1);

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// Jeito antigo
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! You are reading the heading');
// };

// Propagação de evento
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();

//   // Parando a propagação de evento
//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// DOM Transversing
const h1 = document.querySelector('h1');
// Selecionando filhos
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

// Selecionando pais
console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// Selecionando irmãos
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

// Componente de aba
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const contentArea = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Aba ativa
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Ativar área de conteúdo
  contentArea.forEach(ct => ct.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Passando argumentos para event handlers - Menu fade
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation - Método errado
// const coordInicial = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (window.scrollY < coordInicial.top) nav.classList.remove('sticky');
//   else nav.classList.add('sticky');
// });

// Com API Intersection Observer
// const obsCallback = function (entries, observer) {
//   entries.forEach(e => {
//     console.log(e);
//     if (e.isIntersecting) {
//       nav.classList.add('sticky');
//     } else nav.classList.remove('sticky');
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.1],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // porcentagem do elemento observado na tela
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);
