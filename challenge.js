// // RESTAURANT BILL
//
// let billOne = 275;
// let tip = billOne <= 300 && billOne >= 50 ? billOne * .15 : billOne *.2
// console.log(`The bill was ${billOne} and the tip was ${tip} and the total was ${billOne + tip}`)
//
//
//
// let billTwo = 40;
// let BillThree = 430;

function calcAverage(scoreOne, scoreTwo, scoreThree, teamName) {
    let averageValue = (scoreOne + scoreTwo + scoreThree) / 3;
    return ` The average for the ${teamName} is ${averageValue}`
}

let averageDolphins = calcAverage(44,23,71, 'Dolphins')
console.log(averageDolphins)

let averageKoalas = calcAverage(85,54,41, 'Koalas')
console.log(averageKoalas)

let averageDolphins2 = calcAverage(85,54,41, 'Dolphins2')
console.log(averageDolphins2)

let averageKoalas2 = calcAverage(23,34,27, 'Koalas2')
console.log(averageKoalas2)