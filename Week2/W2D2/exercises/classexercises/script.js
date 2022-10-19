// const sentence = "The movie is not that bad, I like it"
// const wordNot = sentence.search("not")
// const wordBad = sentence.search("bad")

// const firstPart = sentence.slice(0, wordNot)
// const secondPart = sentence.slice(wordBad + 3)
// console.log('secondPart:', secondPart);
// console.log('firstPart:', firstPart)

// console.log('wordNot:', wordNot)
// console.log('wordBad:', wordBad)

// console.log(firstPart + "good" + secondPart)

// if (wordNot < wordBad) {
//     const firstPart = sentence.slice(0, wordNot)
//     const secondPart = sentence.slice(wordBad + 3)
//     console.log(firstPart + "good" + secondPart)
// }

// else {
//     console.log(sentence)
// }

let sentence = "The movie is not that bad, I like it"

// position of first appearance of word not by character
const wordNot = sentence.indexOf("not")
console.log(wordNot)
// position of first appearance of word "not" by index in an array
const notone = sentence.split(" ").indexOf("not")
console.log(notone)
console.log(notone[5])

const wordBad = sentence.split(" ").indexOf("bad,")
console.log(wordBad)
console.log(wordBad[5])