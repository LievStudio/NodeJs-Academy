const fetch = require('node-fetch');
const axios = require('axios');

// fetch('https://pokeapi.co/api/v2/pokemon/?limit=20') 
//         .then(res => res.text())
//         .then(body => console.log(body))
//         .catch(error => console.error(error));

// axios.get('https://pokeapi.co/api/v2/pokemon/')
// .then(res=> console.log(res.data.results));

async function getPokemon() {
    try {    
        let { data, status } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=20');
        console.log(status)
        console.log(data.results);
    } catch (err) {
        console.log(err);
    }

}

getPokemon();