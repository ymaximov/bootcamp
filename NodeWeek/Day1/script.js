let axios = require('axios');
const getUsers = async() => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(res.data)
    }catch(e){
    }
}
getUsers()