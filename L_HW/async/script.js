//EX 1


async function fetchStarWars() {
    const response = await fetch('https://www.swapi.tech/api/starships/');
    if(!response.ok){
        const message = `an error hass occured: ${response.status}`;
        throw new Error(message)
    }
    const data = await response.json();
    console.log(data);
    return data
    // waits until the request completes...
    
  }
  fetchStarWars().then

  //EX2
  Outcome is that the bottom async function wont be fired until "resolve after 2 seconds promise is fulfilled"