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

// Ternary Operators

const age = 13;
let theDrink = age >= 18 ? console.log('I love to drink wine') : console.log('I am too young')
console.log(theDrink)

let drink2;
    if (age >= 18) {
        drink2 = 'wine';
    } else {
        drink2 = 'water';
    }
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

//