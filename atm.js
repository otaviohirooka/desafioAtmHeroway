const nota100;
const nota50;
const nota20;
const nota10;

const quantidade = document.getElementById('amount');

let cash = "";

function verifyBills() {
    if(cashNumber <= 0) {
        alert("Erro: valor inválido.");
    } else if(cashNumber = "") {
        alert("Erro: valor nulo.");
    } else if(cashNumber % 10 != 0) {
        alert("Erro: notas indisponíveis para sacar este valor.");
    }else {
        nota100 = cashNumber / 100;

        nota50 = (cashNumber % 100) / 50;

        nota20 = ((cashNumber % 100) % 50) / 20;

        nota10 = ((cashNumber % 100) % 50) % 20;
    }
}

document.getElementById('btn-number1').addEventListener('click', () => {
    cash = cash.concat("1");
});

document.getElementById('btn-number2').addEventListener('click', () => {
    cash = cash.concat("2");                                
});

document.getElementById('btn-number3').addEventListener('click', () => {
    cash = cash.concat("3");
});

document.getElementById('btn-number4').addEventListener('click', () => {
    cash = cash.concat("4");
});

document.getElementById('btn-number5').addEventListener('click', () => {
    cash = cash.concat("5");
});

document.getElementById('btn-number6').addEventListener('click', () => {
    cash = cash.concat("6");
});

document.getElementById('btn-number7').addEventListener('click', () => {
    cash = cash.concat("7");
});

document.getElementById('btn-number8').addEventListener('click', () => {
    cash = cash.concat("8");
});

document.getElementById('btn-number9').addEventListener('click', () => {
    cash = cash.concat("9");
});

document.getElementById('btn-number0').addEventListener('click', () => {
    cash = cash.concat("0");
});

quantidade.innerText = cash;

let cashNumber = Number(cash);

verifyBills(cashNumber);