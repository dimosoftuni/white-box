function findMax1(n1, n2, n3) {
  let max = 0;
  if (n1 >= n2 && n1 >= n3) { max = n1; }
  if (n2 >= n1 && n2 >= n3) { max = n2; }
  if (n3 >= n1 && n3 >= n2) { max = n3; }
  return max;
}

function findMax2(n1, n2, n3) {
  let max;
  if (n1 >= n2 && n1 >= n3) { max = n1; } else if (n2 >= n1 && n2 >= n3) { max = n2; } else { max = n3; }
  return max;
}

function findMax3(n1, n2, n3) {
  let max;
  if (n1 >= n2) {
    if (n1 >= n3) { max = n1; } else { max = n3; }
  } else if (n2 >= n3) { max = n2; } else { max = n3; }
  return max;
}

function calculateMaxNumber() {
  const num1 = parseFloat(prompt('Enter the first number:'));
  const num2 = parseFloat(prompt('Enter the second number:'));
  const num3 = parseFloat(prompt('Enter the third number:'));

  const maxNumber = findMax1(num1, num2, num3);
  // alert(`The maximum number is: ${maxNumber}`);
  document.write('The max number is: ', maxNumber);
}
// document.getElementById('calculateButton').addEventListener('click', calculateMaxNumber);

module.exports = {
  findMax1, findMax2, findMax3
};

