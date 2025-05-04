const defaultResult = 0;
let currentResult = defaultResult;

function add(num1, num2) {
    const result = num1 + num2;
    alert('The result is ' + result);
}


add(1, 3);

currentResult = (currentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10 ) * 3 / 2 - 1`;

// 개발자 도구 > style > white-space : pre;
let errorMessage = 'An error \n' + 'occured';

outputResult(currentResult,calculationDescription);