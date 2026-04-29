// function booWho(argument) {
//   return typeof argument === "boolean";
// }
// console.log(booWho(true));
// console.log(booWho(false));
// console.log(booWho([1, 2, 3]));
// console.log(booWho([].slice));
// console.log(booWho({ a: 1 }));
// console.log(booWho(1));
// console.log(booWho(NaN));
// console.log(booWho("a"));
// console.log(booWho("true"));
// console.log(booWho("false"));

// E-mail Masker //
// const email = "yasbirovik@gmail.com";
// function maskEmail(email) {
//   const atIndex = email.indexOf("@");
//   const maskSign = "*";
//   const maskedEmail =
//     email[0] + maskSign.repeat(atIndex - 2) + email[atIndex - 1] + email.slice(atIndex);
//   return maskedEmail;
// }console.log(email);
// console.log(maskEmail(email));

//Loan Qualification Checker
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;
const minCreditScoreForCar = 650;
const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;
const minIncomeForCar = 30000;
const minIncomeCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (
    annualIncome >= minIncomeForDuplex &&
    creditScore >= minCreditScoreForDuplex
  ) {
    return "You qualify for a duplex, condo, and car loan.";
  }
  if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCondo &&
    creditScore >= minCreditScoreForCondo
  ) {
    return "You qualify for a condo and car loan.";
  } else if (
    annualIncome >= minIncomeForCar &&
    creditScore >= minCreditScoreForCar
  ) {
    return "You qualify for a car loan.";
  } else if (
    annualIncome < minIncomeForCar &&
    creditScore < minCreditScoreForCar
  ) {
    return "You don't qualify for any loans.";
  }
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);
