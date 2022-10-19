let sentence = "The movie is not that bad, I like it";

console.log(sentence);
//convert the sentence to an array
let strToArray = sentence.split(' ');
//the actual array we create with split methode
console.log(strToArray);
//ex.1

//the index of the word "not" in the array
console.log(strToArray.indexOf('not'));

//ex.2

//the index of the word "bad" in the array
console.log(strToArray.indexOf('bad,'));


//ex.3

// the index of the word "not" in the array
let notwordindex = strToArray.indexOf('not');
//the index of the word "bad" in the array
let badwordindex = strToArray.indexOf('bad,');

// if (notwordindex < badwordindex) {
//     console.log('right')
// };

if (notwordindex > badwordindex) {
    console.log(sentence)
} else {
    console.log('The movie is good , i like it')
};
