// SWITCH CASE

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

// TERNARY OPERATORS ---

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


// // STRICT MODE ---

// 'use strict';
//
// let hasDriversLicense = false;
// const passTest = true;
//
// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');
//
// const interface = 'Audio'


// FUNCTIONS ---

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


//FUNCTION DECLARATION ---

//you can even agee function first and then define it later

// function age1(birthYeah){
//     return 2037 - birthYeah;
// }
//
// const age1 = age1(2000);
// console.log(age1);


// FUNCTION EXPRESSION or ANONYMOUS FUNCTION

// const age2 = function (birthYear) {
//     return 2037 - birthYear;
// }
//
// const age2 = age2(2000);
// console.log(age1, age2);


// ES6 ARROW FUNCTION ---

// return happens implicit without the word return

// const age3 = birthYear => 2037 - birthYear;
// const age3 = age3(2000)
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


//FUNCTION INSIDE OF OTHER FUNCTIONS ---

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

// const age = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = age(birthYear)
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


// ARRAYS ---

//a big container into which you can throw variables and later reference them

// const friends = ['Michael', 'Stephen', 'Peter'];
// console.log(friends)

//a function based way to write array
// const years = new Array(1991,1984, 2018, 2020);

// console.log(friends[0])
// console.log(friends.length)
// // last item in array
// console.log(friends.length - 1);

// change value in array
// friends[2] = 'Jay'
// console.log(friends)

// only primitive values are immutable but array is not primitive value

//you can put an array inside an array

// const firstName = 'Jonas';
// const jonas = [firstName, 'Kenan', 2037 - 1997, friends]
// console.log(jonas)

// function age(birthYear){
//     return 2037 - birthYear
// }
//
// const years = [1990, 1967, 2002, 2010, 2018]

// const age1 = age(years[0])
// const age2 = age(years[1])
// const age3 = age(years[2])
// const age4 = age(years[3])
// const age5 = age(years[4])
//
// const ages = [age1, age2, age3, age4, age5]
// console.log(ages)

// BASIC FUNCTIONS THAT WORK ON ARRAYS ARE CALLED METHODS
// METHODS ARE OPERATIONS THAT RUN ON ARRAYS

// const friends = ['Kenan', 'Tom', 'Michael']

// add something at end of array
// friends.push('Jay');

// add something at beginning of array
// friends.unshift('Amara')
// console.log(friends)

// remove last element from array
// friends.pop();
// console.log(friends)

//you can store last removed element
// const popped = friends.pop();
// console.log(popped);

// remove first element from array
// friends.shift();

// you can find stuff by index search
// console.log(friends.indexOf('Kenan'))

// you can check if array includes something (true or false)
// includes checks if same type as well
// console.log(friends.includes('Kenan'))


// OBJECTS ---

// objects created because arrays have no keys to reference individual things

//objects have keys and each of those keys are agea PROPERTY with a VALUE

// property : value

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Stephen']
// }
//
// console.log(jonas)

// dot vs bracket notation of Objects

//dot
// console.log(jonas.lastName)

// bracket
// console.log(jonas['lastName'])
//
// const nameKey = 'Name';

// with bracket, you can do cool operations here to get expressions

// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])

// with bracket notation you can get a value from an object by referencing its key

// const interestedIn = prompt('What do you want to know about me? Options are firstName, lastName, age, job, friends')
// console.log(interestedIn);
//
// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn])
//     } else {
//     alert('Wrong request!')
// }

// how to add elements to object

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasman';
// console.log(jonas)
//
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`)

// object Methods (things you do to objects)

// const jonas = {
//     firstName: 'Kenan',
//     lastName: 'Schmidt',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Stephen'],
//     hasDriversLicense: true,

    // how functions are done inside an object

    // the this keyword relates to the object age the method

    // age: function() {
    //     console.log(this)
    // // this means jonas in this case..that is what is before birthYear is jonas when you console.log
    // // one way to see what this is to console.log(this)
    //     return 2037 - this.birthYear;
    //
    // },

    // console.log(jonas.calcAge());

    // how to store age and return it as a data property in object (jonas.age)
//         age: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
// };

// if you are inside the object you can do this
// console.log(jonas.age())
// console.log(`${jonas['firstName']} is a ${jonas.age} year old ${jonas['job']} and he ${jonas.hasDriversLicense ? 'has' : 'does not have'} a drivers license` )


// THE FOR LOOP ---

for(let i = 0; i <= 10; i++){
    console.log(`Number ${i}`)
}