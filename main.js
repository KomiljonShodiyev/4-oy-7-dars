// -----------------------------------------------1-rasm------------------------


// 1-question

// let person = {
//     name: "Abdulloh",
//     age: 19,
//     job: "Logistic company",
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// for (let key in person) {
//     console.log(`${key} - ${person[key]}`);
// }


// 1-question



// 2-question

// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleyball",
//     interest: "Sleep"
// };

// const mergedPerson = Object.assign({}, person1, person2);

// console.log(mergedPerson);


// 2-question


// 3-question


// let numbers = [1, 2, 3, 4, 5]; 

// let lastValue = numbers[numbers.length - 1]; =
// let incrementedValue = lastValue + 1; 

// numbers.push(incrementedValue); 

// console.log(numbers); 


// 3-question


// 4-question   ??????????????????????????????????


// 5-question


// function swapFirstAndLast(array) {
//     if (array.length < 2) {
//         return array; 
//     }

//     let first = array[0];
//     let last = array[array.length - 1];

//     array[0] = last;
//     array[array.length - 1] = first;

//     return array;
// }

// let array = [1, 2, 3, 4, 5];
// let result = swapFirstAndLast(array);
// console.log(result);

//  5-question


// 6-question

// function collectWords(wordsArray = [], count = 6) {
//     if (count === 0) {
//         return wordsArray;
//     }

//     let word = prompt("Ixtiyoriy so'z kiriting");
//     wordsArray.push(word);

//     return collectWords(wordsArray, count - 1);
// }

// let words = collectWords();
// console.log(words);


// 6-question



// 7-masala ???????????????????????????????????????????????????????????????????



// --------------------------------------------------------------------2-rasm-----------------------------------


// 1-question

// function promptAndAddToArray() {
//     let array = [];
//     let inputString = prompt("Ixtiyoriy so'z kiriting");
//     array.push(inputString);
//     console.log(array);
// }

// promptAndAddToArray();


// 1-question


// 2-question ????????????????????????????????


// 3-question

// let obj = {
//     name: "Jhon",
//     age: "30",
//     job: "mechanic",
//     study: "none",
//     travel: "US"
// };

// let keysArray = Object.keys(obj);

// let length = keysArray.length;

// console.log(keysArray); 
// console.log(length);    


// 3-question


// 4-question

// function collectNumbers(numbersArray = [], count = 4) {
//     if (count === 0) {
//         // Base case: when count reaches 0, return the array
//         return numbersArray;
//     }

//     let number = parseFloat(prompt("Ixtiyoriy son kiriting")); 
//     numbersArray.push(number);

//     return collectNumbers(numbersArray, count - 1); 
// }

// function sumArray(numbersArray) {
//     return numbersArray.reduce((acc, val) => acc + val, 0); 
// }

// let numbers = collectNumbers();

// let sum = sumArray(numbers);

// console.log(numbers); 
// console.log(sum);     

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111Bu masalani internetdan oldim!!!!!!!!!!!!!!!!!!!!!!!!!\

// 5-question

let obj1 = {
    name: "Abdulloh"
};

let obj2 = {
    age: 19
};

// Merging objects
let mergedObject = { ...obj1, ...obj2 };

// Logging values to console
console.log(mergedObject);
