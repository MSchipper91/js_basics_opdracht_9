function sum1(number1, number2) {
    const multiply1 = number1 * number1;
    const multiply2 = number2 * number2;
    const total = multiply1 + multiply2;
    const uitkomst = total * total;
    return uitkomst;
}

const sum2 = function(number1, number2) {
    const multiply1 = number1 * number1;
    const multiply2 = number2 * number2;
    const total = multiply1 + multiply2;
    const uitkomst = total * total;
    return uitkomst;
};

const sum3 = (number1, number2) => {
    const multiply1 = number1 * number1;
    const multiply2 = number2 * number2;
    const total = multiply1 + multiply2;
    const uitkomst = total * total;
    return uitkomst;
};

console.log(sum1(8, 3))
console.log(sum2(8, 3))
console.log(sum3(8, 3))