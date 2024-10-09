//Q1
const multiplesOfSixAndNine = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 6 === 0 && i % 9 === 0) {
      console.log(i);
    }
  }
};

//multiplesOfSixAndNine();

const greaterNums = (n1, n2) => {
  if (Number.isInteger(n1 / n2)) {
    return null;
  } else if (n1 === n2) {
    return "both integers are equal";
  } else if (n1 > n2) {
    return n1;
  } else {
    return n2;
  }
};

//console.log(greaterNums(5, 5));

//Q3
const sumOfFourAndSix = () => {
  let sum = 0;
  for (let i = 0; i <= 1000; i++) {
    if (i % 4 === 0 && i % 6 === 0) {
      sum += i;
    }
  }
  console.log(sum);
};

//sumOfFourAndSix();

//Q4
const oddAndEvenToN = (num) => {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      console.log(i + " is Even");
    } else {
      console.log(i + " is Odd");
    }
  }
};

//oddAndEvenToN(10);

//Q5
const sumOfDivisbleByTen = () => {
  sum = 0;
  let i = 0;
  while (i <= 1000) {
    if (i % 10 !== 0) {
      sum += i;
    }
    i++;
  }
  console.log(sum);
};

//console.log(sumOfDivisbleByTen());

//Q6
const greaterNum = (n1, n2, n3, n4) => {
  let biggerNum = 0;
  let arr = [n1, n2, n3, n4];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggerNum) {
      biggerNum = arr[i];
    }
  }
  return biggerNum;
};

console.log(greaterNum(5, 6, 7, 8));
