const axios = require('axios');

module.exports = async function() {
  try {
    let arr= [];
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
    for (let i = 0; i < 50; i++) {
      let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`);
      arr.push(pokemon);
      console.log(arr);
      return arr;
    }
    // console.log(response.data);
    return response.data;

  } catch (error) {
    console.error(error);
  }
}

