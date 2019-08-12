const btnNumber1 = document.getElementById('btnNumber1');
const input = document.getElementById('input');

btnNumber1.addEventListener('click', () => {
  input.value = input.value +  Number(btnNumber1.textContent);
});