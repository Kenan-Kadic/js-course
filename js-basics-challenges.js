// Challenge 0 RESTAURANT BILL
//
// let billOne = 275;
// let tip = billOne <= 300 && billOne >= 50 ? billOne * .15 : billOne *.2
// console.log(`The bill was ${billOne} and the tip was ${tip} and the total was ${billOne + tip}`)
//
//
//
// let billTwo = 40;
// let BillThree = 430;

// Challenge 1 - Averages
//
// function calcAverage(scoreOne, scoreTwo, scoreThree, teamName) {
//     let averageValue = (scoreOne + scoreTwo + scoreThree) / 3;
//     return `The average for the ${teamName} is ${averageValue}`
// }
//
// let averageDolphins = calcAverage(44,23,71, 'Dolphins')
// console.log(averageDolphins)
//
// let averageKoalas = calcAverage(85,54,41, 'Koalas')
// console.log(averageKoalas)
//
// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins > avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas > avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins} )`)
//     } else {
//         console.log('the score was tied')
//     }
// }
//
// let averageDolphins2 = calcAverage(85,54,41, 'Dolphins2')
// console.log(averageDolphins2)
//
// let averageKoalas2 = calcAverage(23,34,27, 'Koalas2')
// console.log(averageKoalas2)
//
// checkWinner(averageDolphins, averageKoalas)
// checkWinner(averageKoalas2, averageDolphins2)

// // CHALLENGE 2 ARRAYS
//
//
// function calcTip(bill){
//     if (bill <= 300) {
//         return bill * .15;
//     } else {
//         return bill * .2;
//     }
// }
// console.log(calcTip(100));
//
// const theBills = [125, 555, 44]
//
// const tip1 = calcTip(theBills[0]);
// const tip2 = calcTip(theBills[1]);
// const tip3 = calcTip(theBills[2]);
//
// const tipsArray = [tip1,tip2,tip3];
// console.log(tipsArray)
//
// // totals
//
// function calcTotal(bill){
//     if (bill <= 300) {
//         return bill * 1.15;
//     } else {
//         return bill * 1.2;
//     }
// }
//
// console.log(calcTotal(100));
//
// const total1 = calcTotal(theBills[0])
// const total2 = calcTotal(theBills[1])
// const total3 = calcTotal(theBills[2])
//
// const totalsArray = [total1, total2, total3]
// console.log(totalsArray)

// CHALLENGE 3 OBJECTS ---

// const mark = {
//     fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//     }
// };
//
// const john = {
//     fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi
//     }
// };
//
// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi)
// console.log(john.bmi)
//
// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullname}'s BMI (${mark.bmi}) is higher than ${john.fullname}'s BMI (${john.bmi})`)
// } else if (mark.bmi < john.bmi) {
//     console.log(`${john.fullname}'s BMI (${john.bmi}) is higher than ${mark.fullname}'s BMI (${mark.bmi})`)
// }

// CHALLENGE 4 -- LOOPS

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
// const tips = [];
// const totals = [];
//
// function calcTip(bill) {
//     if (bill <= 300) {
//         return bill * .15;
//     } else {
//         return bill * .2;
//     }
// }
//
// function calcTotal(bill) {
//     if (bill <= 300) {
//         return bill * 1.15;
//     } else {
//         return bill * 1.2;
//     }
// }
//
// for(let i = 0; i < bills.length; i++){
//     const tip = calcTip(bills[i]);
//     tips.push(tip)
//     totals.push(tip + bills[i]);
// }
// console.log(`the tips are ${tips}`)
// console.log(`the totals are ${totals}`)
//
// const calcAverage = function(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum/arr.length
// }
// console.log(calcAverage([2,3,6]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// DEBUGGING ---

    const measureKelvin = function () {
        const measurement = {
            type: 'temp',
            unit: 'celsius',
            value: Number(prompt('Degrees celsius: ')),
        };

        const kelvin = measurement.value + 273;
        return kelvin;
    }
    console.log (measureKelvin())
