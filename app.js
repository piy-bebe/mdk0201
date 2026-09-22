console.log('Привет как дела?');
const btn = document.querySelector('#a');

btn.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.classList.toggle('black');
});
