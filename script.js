let $buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');
let fixCalc = document.querySelector('.fix');
let operatorDitekan = false;
let operator = [];
let fix = 0;
let nilai1 = [];
let nilai2 = [];
[...$buttons].map((x) => {
  x.addEventListener('click', function (e) {
    switch (this.innerHTML) {
      case 'AC':
        clearDisplay();
        break;
      case 'DEL':
        removeNumber();
        break;
      case '+/-':
        makeNegative();
        break;
      case '=':
        makeCalculation();
        break;
      case '+':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '*':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '/':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);

        storeValue();
        break;
      case '-':
        operator.splice(0, 1, this.innerHTML);
        console.log(operator);
        storeValue();
        break;
      default:
        if (nilai1.length > 11) {
          alert('Angka melebihi batas nilai masukan');
        } else {
          nilai1.push(this.innerText);
          display.textContent = nilai1.join('');
          console.log(nilai1);
        }
        break;
      case '.':
        if (nilai1.includes('.')) {
          alert('Sudah mentok');
        } else {
          nilai1.push(this.innerText);
          display.textContent = nilai1.join('');
        }
        break;
    }
  });
});

//hapus angka di layar
function clearDisplay() {
  display.textContent = '';
  fixCalc.textContent = '';
  nilai1 = [];
  nilai2 = [];
  operator = [];
}
function removeNumber(e) {
  nilai1.pop();
  display.textContent = nilai1.join('');
}
function makeNegative() {
  if (nilai1.length < 1) {
    return false;
  } else if (nilai1[0] == '-') {
    nilai1.shift();
  } else {
    nilai1.unshift('-');
  }
  display.textContent = nilai1.join('');
}

//Menghitung
function makeCalculation() {
  if (nilai2.length > 0 && operator.length !== 0) {
    fix = eval(nilai2 + operator + nilai1.join(''));
    fixCalc.textContent = '';
    fixCalc.textContent = eval(fix).toFixed(2);
    display.textContent = '';
    nilai2 = eval(fix);
    nilai1 = [];
  } else if (operator.length == 0) {
    alert('Tolong masukkan angka');
  } else {
    fix = fix = eval(nilai2 + operator + nilai1.join(''));
    console.log('fix');
    console.log(fix);
    fixCalc.textContent = '';
    display.textContent = '';
    fixCalc.textContent = eval(fix).toFixed(2);
    nilai2 = eval(fix);
    nilai1 = [];
  }
}

//simpan nilai
function storeValue() {
  if (nilai1.length == 0 && nilai2.length == 0) {
    return false;
  } else if (nilai2.length > 0) {
    fixCalc.textContent = nilai2 + ' ' + operator;
  } else if (nilai2.length == 0) {
    nilai2.push(nilai1.join(''));
    nilai1 = [];
    display.textContent = '';
    fixCalc.textContent = '';
    fixCalc.textContent = nilai2 + ' ' + operator;
  }
  fixCalc.textContent = nilai2 + ' ' + operator;
}
