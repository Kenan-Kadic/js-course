// const massOfMark = 95;
// const heightOfMark = 1.88;
// const massOfJohn = 85;
// const heightOfJohn = 1.76;
//
// const BMIofMark = massOfMark / heightOfMark ** 2
// const BMIofJohn = massOfJohn / (heightOfJohn * heightOfJohn)
//
// const markHigherBMI = BMIofMark > BMIofJohn
//
// if (BMIofMark > BMIofJohn) {
//     console.log(`Mark's BMI ${BMIofMark} is higher than Johns`)
//     } else {
//     console.log(`John's BMI ${BMIofJohn} is higher than Mark's`)
//     }
//

// let theDay = 'monday';
//
//     // NOT USED VERY MUCH
//
//     // THIS IS DESIGNED FOR EQUALITY not so much for grater than or equal to
//
//     switch(theDay) {
//         case 'monday': // if day === 'monday'
//             console.log('Plan course structure');
//             console.log('Go to coding meetup');
//             break;
//         case 'tuesday':
//             console.log('Prepare theory videos');
//             break;
//             // same thing for 2 days
//         case 'wednesday':
//         case 'thursday':
//             console.log('Write code examples');
//             break;
//         case 'friday':
//             console.log('I write code videos');
//             break
//         case 'saturday':
//         case 'sunday':
//             console.log('Enjoy the weekend');
//             break;
//
//         default:
//             console.log('Not a valid day');
//     }
//
// let day = 'Wednesday'
//
// if (day === 'Monday'){
//        console.log('Plan course structure');
//        console.log('Go to coding meetup');
//     } else if (day === 'Tuesday') {
//        console.log('Prepare theory videos');
//     } else if (day === 'Wednesday' || day === 'Thursday') {
//         console.log('Write code examples');
//     } else if (day === 'Friday') {
//         console.log('Record Videos')
//     } else if (day === 'Saturday' && day === 'Sunday'){
//         console.log('Enjoy the Weekend')
//     } else {
//         console.log('Not a valid day')
// }
//
//

// Ternary Operators

// const age = 13;
// let theDrink = age >= 18 ? console.log('I love to drink wine') : console.log('I am too young')
// console.log(theDrink)
//
// let drink2;
//     if (age >= 18) {
//         drink2 = 'wine';
//     } else {
//         drink2 = 'water';
//     }
// console.log(drink2);
//
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// // STRICT MODE

// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');
//
// const interface = 'Audio'


// FUNCTIONS

// function logger() {
//     console.log('My name is Kenan')
// }
//
// logger();
// logger();
// logger();
//
// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges)
//     return `juice with ${apples} apples and ${oranges} oranges`;
// }

// // ANY TIME YOU WANT TO GET A VALUE FROM A FUNCTION = SET IT EQUAL TO A VARIABLE
//
// fruitProcessor(3,2)
// const appleJuice = fruitProcessor(3, 2);
// console.log(appleJuice)
// console.log(fruitProcessor(3, 2))
//
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log (appleOrangeJuice)

//FUNCTION DECLARATION

//you can even call the function first and then define it later

// function calcAge1(birthYeah){
//     return 2037 - birthYeah;
// }
//
// const age1 = calcAge1(2000);
// console.log(age1);

// FUNCTION EXPRESSION or ANONYMOUS FUNCTION

// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const age2 = calcAge2(2000);
// console.log(age1, age2);


// ES6 ARROW FUNCTION

// return happens implicit without the word return

// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(2000)
// console.log(age3)

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }
//
// yearsUntilRetirement(1991);
// console.log(yearsUntilRetirement(2000, 'Ken'));
// console.log(yearsUntilRetirement(1985, 'Tom'));

//FUNCTION INSIDE OF OTHER FUNCTIONS

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
//
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePiecesFunF} oranges.`
//     return juice;
// }
//
// console.log(fruitProcessor(2,3));

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age;
//     // return retirement;
//         if (retirement > 0) {
//             console.log(`${firstName} retires in ${retirement} years`);
//             return retirement;
//         } else {
//             console.log(`${firstName} has already retired`);
//             return -1;
//         }
// }
//
// console.log (yearsUntilRetirement(1991, 'Jonas'));
// console.log (yearsUntilRetirement(1950, 'Mike'));
