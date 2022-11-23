

async function fetchProducts() {
  const response = await fetch('/modules/data.js');
  // waits until the request completes...
  console.log(response);
  try{
    if(response.status !== 200){
        throw new Error
    }else{
        const data = await fetch(response.json());
        console.log(response)
        const d = data.data
        return d
    }
  }catch{

  }
}
fetchProducts()
.then(data=>document.body.append(data))