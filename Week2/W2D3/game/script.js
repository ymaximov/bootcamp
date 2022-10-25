document.querySelector('.gamebtn').addEventListener('click', function(){
    const playerInput = document.querySelector('.guess').value
    const correctAnswer = document.querySelector('.won');
    console.log(document.querySelector('.guess').value);
    console.log(playerInput);
    if (playerInput === '18') {
        console.log('hello');
        correctAnswer.textContent = 'YOU WON!!';
    } else {
        correctAnswer.textContent = 'YOU LOSE. GUESS AGAIN!!';
    }
})
// const loop = document.querySelector('.loop').children 
// for (i=0; i < loop.length; i++) {
//     // console.log('i=',i);
//     loop[i].innerText += i
//     console.log(loop[i].innerText);
//     console.log(loop[1].innerText);
// }