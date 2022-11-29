// //Exercise 1 : Find The Sum

// const findSum = (a, b) => a + b;
// findSum(1, 2)

// //Exercise 2 : Kg And Grams
// const kToG = (kilograms) => kilograms * 1000
// kToG(2)
// function kiloToGram(kilograms){
//     return kilograms * 1000
// }
// kiloToGram(3)
// const kiloCalc = function(kilograms){
//     return kilograms * 1000
// }
// kiloCalc(4)

// //Exercise 3 : Fortune Teller
// (function (c, p, l, j) {
//     let tag = document.createElement("p")
//     let text = document.createTextNode(`You will be a ${j} in ${l}, and married to ${p} with ${c} kids`)
//     tag.appendChild(text)
//     let element = document.getElementById("new")
//     element.appendChild(tag)
//   }("4", "Sally", "TLV", "CEO"));

// Exercise 4 : Welcome
// (function (user, pfp) {
//     let welcomeUser = document.createElement("div")
//     let username = document.createTextNode(`Welcome ${user}`)
//     welcomeUser.appendChild(username)
//     let element = document.getElementById("username")
//     element.appendChild(welcomeUser)
//     // let welcomePic = document.createElement("img")
//     // let imageParent = document.getElementById("pfp")
//     // welcomePic.src = https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg
//     // imageParent.appendChild(welcomePic)
    //   }("Yaniv Maximov",))

    //Exercise 5 : Juice Bar

    
    function addIngredients(one, two, three){
        function makeJuice(size){
            return size
        }
            let create = document.createElement("div")
            let sentence = document.createTextNode(`The  Client Wants a ${makeJuice} Juice, containing ${one}, ${two} and ${three}`)
            create.appendChild(sentence)
            let element =  document.getElementById("sentence")
            element.appendChild(create)
            makeJuice("large")
        }
    addIngredients("apple Juice", "Pineapple", "Mango")
