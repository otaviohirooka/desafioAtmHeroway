function verifyBills(cashNumber) {
    console.log(cashNumber);
    if(cashNumber <= 0) {
        document.getElementById('btnConfirm').addEventListener('click', () => {
            alert("Erro: valor inválido.");
        });
    }else if(cashNumber = "") {
        document.getElementById('btnConfirm').addEventListener('click', () => {
            alert("Erro: valor nulo.");
        });    
    }else if(cashNumber % 10 != 0) {
        document.getElementById('btnConfirm').addEventListener('click', () => {
            alert("Erro: notas indisponíveis para sacar este valor.");
        }); 
    }else {
        nota100 = cashNumber / 100;
                                                                       
        nota50 = (cashNumber % 100) / 50;

        nota20 = ((cashNumber % 100) % 50) / 20;

        nota10 = ((cashNumber % 100) % 50) % 20;
    }
}

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

let nota11 = 0;
let nota50 = 0;
let nota20 = 0;
let nota10 = 0;

console.log(input.value);

let cashNumber = Number(input.value);

verifyBills(cashNumber);

document.getElementById('btnClear').addEventListener('click', () => {
    input.value = "";
})
