// let APIKEY = "k5oZLRzjZAXakdbQXAo5CqyXCcjX1rFL"
// let deleteBtn = document.getElementById("delete")
// function init(){
    document.getElementById("submit").addEventListener("click", event =>{
        event.preventDefault();
        let str = document.getElementById("inputgif").value;
        let url = `https://api.giphy.com/v1/gifs/search?api_key=k5oZLRzjZAXakdbQXAo5CqyXCcjX1rFL&q=${str}&limit=1&offset=0&rating=g&lang=en`
        const xhr = new XMLHttpRequest()
        xhr.onload = function(){
            if (this.status === 200){
                try {
                    const resObj = JSON.parse(this.responseText)
                    console.log(resObj);
                    const gifUrl = resObj.data[0].bitly_url
                    console.log(gifUrl);
                    const img = document.querySelector("#img")
                    console.log(img);
                    img.src = gifUrl
                    console.log(img);
                    const deleteBtn = document.querySelector("#delete")
                    console.log(deleteBtn);
                    deleteBtn.addEventListener("click", ()=> {
                        img.style.display = "none"
                    })
                    
                } catch (e){
                    console.warn('Error is JSON could not parse');
                };
            } else {
                console.warn('Did Not Receive Status of 200');
            }
        }
        
        xhr.open("GET", url);
        xhr.send();

        console.log(xhr);
    
    })

    

    //fetch(url)
    //     .then(response => response.json())
    //     .then(content => {
    //         console.log(content.data[0].url);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // })