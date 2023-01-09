const axios = require('axios');

module.exports = async function() {
  try {
    let arr= [];
    // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
    for (let i = 0; i < 50; i++) {
      let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i+1}`); 
      arr.push(pokemon);
      // return arr;
    }
    // console.log(arr[0]);
    return arr;
    // console.log(arr);
    // arr.forEach(obj =>{
    //   // console.log(obj.data.name);
    //   return obj;
    // })
    // return response.data;

  } catch (error) {
    console.error(error);
  }
}

