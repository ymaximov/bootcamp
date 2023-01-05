const api = async() => {
    try {
        const res = await fetch('http://localhost:3002/json');
        const data = await res.json();
        console.log(data);
        showData(data);

    } catch (error) {
        console.log(error);
    }
}
api()

const showData = (data) => {
    const root = document.querySelector('#root');
    console.log(root);
    console.log(data);
    root.textContent = `${data.firstname} ${data.lastname }`
}

const alertMe = () => {
    alert('You Have Been Alerted')
}