// const {users} = require('./modules/users.js')
const axios = require('axios')
const fs = require('fs')

console.log(fs);


const users = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

// users()

console.log('hha22');