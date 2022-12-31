// localStorage.setItem('myName', 'John')

// const myName = localStorage.getItem('myName')
// console.log(myName);

// localStorage.removeItem('myName')
const form1 = document.querySelector("#form1")
form1.addEventListener('submit', submitMe)

console.log(form1);

let arr = []

function submitMe(e) {
    e.preventDefault();
    const text = document.getElementById("textbox").value;
    arr.push(text);
    const local = localStorage.setItem('note', JSON.stringify(arr))
}
// const text1 = document.getElementById("textbox").value;

// -----------------

const ITEM_KEY = 'notes';
const root = document.getElementById('root');
const input = document.getElementById('note');
const arr = getNotesFromLocalStorage();

const saveNote = () => {
  const note = input.value;
  arr.push(note);
  // save to loaclStorage
  localStorage.setItem(ITEM_KEY, JSON.stringify(arr))
  createNotes(arr);
}

const createNotes = (arr) => {
  const html = arr.map(note => {
    return `<div>${note}</div>`
  })
  console.log(html);
  root.innerHTML = html.join('');
}

function getNotesFromLocalStorage() {
  // const notes = localStorage.getItem(ITEM_KEY);
  // if(notes){
  //   return JSON.parse(notes)
  // }
  // else{
  //   return []
  // }
  return JSON.parse(localStorage.getItem(ITEM_KEY)) || []
}
createNotes(arr)
