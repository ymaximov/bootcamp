const users = async() => {
try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =  await response.json();
    return data
} catch (error) {
    console.log(error);
}
}

module.exports = { users }