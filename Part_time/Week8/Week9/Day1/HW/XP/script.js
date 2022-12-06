//EX1 
//GET request data will appear in text boxes

//EX2
// Post request data will appear in server

//Ex3

// const marioGame = {
//     detail : "An amazing game!",
//     characters : {
//         mario : {
//           description:"Small and jumpy. Likes princesses.",
//           height: 10,
//           weight: 3,
//           speed: 12,
//         },
//         bowser : {
//           description: "Big and green, Hates princesses.",
//           height: 16,
//           weight: 6,
//           speed: 4,
//         },
//         princessPeach : {
//           description: "Beautiful princess.",
//           height: 12,
//           weight: 2,
//           speed: 2,
//         }
//     },
//   }

//   const myJson = JSON.stringify(marioGame)
//   console.log(myJson);
//nested objects stay nested


const marioGame = {
    detail : "An amazing game!",
    characters : {
        mario : {
          description:"Small and jumpy. Likes princesses.",
          height: 10,
          weight: 3,
          speed: 12,
        },
        bowser : {
          description: "Big and green, Hates princesses.",
          height: 16,
          weight: 6,
          speed: 4,
        },
        princessPeach : {
          description: "Beautiful princess.",
          height: 12,
          weight: 2,
          speed: 2,
        }
    },
  }

  const prettyPrint = JSON.stringify(marioGame, null, 2)
  console.table(marioGame)
  console.log(prettyPrint);