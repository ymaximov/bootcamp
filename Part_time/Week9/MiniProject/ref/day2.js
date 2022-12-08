let xhr = new XMLHttpRequest();

function getJoke() {
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.responseType = 'json';
    xhr.send();
}

xhr.onload = function() {
  console.log(xhr.response);
  if(xhr.status === 200){
    document.getElementById('root').innerHTML = xhr.response.value
  }
}
// create XMLHttpRequest
// let xhr = new XMLHttpRequest();

// init
// xhr.open(method, URL, [async])
// xhr.open('POST', `https://artistic-husky-spandex.glitch.me/example`);

// send the request
// send([body])
// let user = {
  // name:'John',
  // username:'jjj'
// }
//
// xhr.setRequestHeader('Content-Type','application/json')

// xhr.send(JSON.stringify(user));

// onload
// onerror
// onprogress

// xhr.onload = function() {
  // console.log(xhr.status, xhr.statusText);
  // console.log(xhr.response);
// }

// xhr.onerror = function(){
  // alert('error')
// }

// xhr.onprogress = function(event){
  // console.log(event.lengthComputable)
  // if(event.lengthComputable){
  //   console.log(event.loaded + " " + event.total);
  // }
  // else{
  //   console.log(event.loaded);
  // }
// }


// timeout
// xhr.timeout = 10000 // ms

// response type
// "" - text
// text
// json
// arraybuffer
// blob
// document

// xhr.responseType = 'text'


// xhr.onreadystatechange = function(){

// }

// xhr.abort()
