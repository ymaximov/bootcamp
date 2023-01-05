const n = document.getElementById('name');
const q = document.getElementById('quantity');
const root = document.getElementById('root')

const sendData = (res) => {
    const html = res.map(item => {
        return `<div>${item.name} ${item.quantity}</div>`
    } )
    root.innerHTML = html.join('')
}

const frm = (e) => {
    e.preventDefault();
    const getItems = async () => {
        const data = 
        {
            name: n.value,
            quantity: q.value
        }
       const api = await fetch('http://localhost:3001/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
       });
       const response = await api.json();
       console.log(response);
       sendData(response)
    }
    getItems();
}

console.log('Hello');
