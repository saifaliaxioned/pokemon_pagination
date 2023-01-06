const axios = require('axios');

module.exports = async function() {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
    // console.log(response.data.results);
    return response.data.results;

  } catch (error) {
    console.error(error);
  }
}
