async function fetchProducts() {
    const response = await fetch(‘http://localhost:8000/api/products’);
    console.log(response);
    try {
        if (response.status !== 200) {
            throw new Error
        } else {
            const data = await response.json();
            console.log(data);
            return data
        }
    } catch (e){
    }
}
fetchProducts()
    .then((data) => createP(data));
const createP = (arr) => {
        arr.forEach((element,i) => {
        document.body.append(element.name);
        });
    }

    