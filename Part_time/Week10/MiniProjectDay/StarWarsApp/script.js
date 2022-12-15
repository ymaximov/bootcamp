const random = () => {
    return Math.floor(Math.random() * 83)
}

const displayInfo = (info) => {
   const name = document.getElementById("name")
   name.innerText = "Character Name " + info.result.properties.name
   const height = document.getElementById("height")
   height.innerText =  "Height " + info.result.properties.height
   const gender = document.getElementById("gender")
   gender.innerText = "Gender " + info.result.properties.gender
   const birthday =  document.getElementById("birthday")
   birthday.innerText = "Birthday " + info.result.properties.birth_year
}

const displayHomeWorld = (info) => {
    const homeworld = document.getElementById("homeworld")
    homeworld.innerText = "Home World " + info

}

const getData = async() => {
    console.log(random());
    try {
        const res = await fetch(`https://www.swapi.tech/api/people/${random()}`)
        const data = await res.json()
        console.log(data);
        displayInfo(data)
        try {
            const res2 = await fetch(data.result.properties.homeworld)
            const data2 = await res2.json()
            displayHomeWorld(data2.result.description)
            console.log(data2);
        } catch (error) {
            console.log(error, "Could not fetch home world");
            displayHomeWorld("Unknown")
            
        }
    } catch (error) {
        console.log(error, "Could Not Fetch");
    }
    
}