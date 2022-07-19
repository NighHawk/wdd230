const hambutton = document.querySelector('.hamburgerBtn');
const mainnav = document.querySelector('.navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
hambutton.addEventListener('click', () => {hambutton.classList.toggle('pressed')}, false);