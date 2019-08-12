const input = document.getElementById('input');

const btnNumber1 = document.getElementById('btnNumber1');
const btnNumber2 = document.getElementById('btnNumber2');
const btnNumber3 = document.getElementById('btnNumber3');
const btnNumber4 = document.getElementById('btnNumber4');
const btnNumber5 = document.getElementById('btnNumber5');
const btnNumber6 = document.getElementById('btnNumber6');
const btnNumber7 = document.getElementById('btnNumber7');
const btnNumber8 = document.getElementById('btnNumber8');
const btnNumber9 = document.getElementById('btnNumber9');
const btnNumber0 = document.getElementById('btnNumber0');


btnNumber1.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber1.textContent);
});

btnNumber2.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber2.textContent);
});

btnNumber3.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber3.textContent);
  });

btnNumber4.addEventListener('click', () => {
input.value = input.value +  Number(btnNumber4.textContent);
});

btnNumber5.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber5.textContent);
});

btnNumber6.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber6.textContent);
});

btnNumber7.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber7.textContent);
});

btnNumber8.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber8.textContent);
});

btnNumber9.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber9.textContent);
});

btnNumber0.addEventListener('click', () => {
    input.value = input.value +  Number(btnNumber0.textContent);
});