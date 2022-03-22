const fetch = require('node-fetch');

const fetchJoke = async (url) => {

  const u = url;

  try {
    const response = await fetch(u);
    const data = await response.json();
    console.log(data.value);
    if (data.value === undefined) {
      throw new Error('vish, deu ruim!')
    }
  } catch (error) {
    console.log(`Algo deu errado :( \n${error.message}`);
  }
}

fetchJoke('https://api.chucknorris.io/jokes/random?category=dev');

//fetch(url)
// .then((response) => { 
// if(!response.ok) throw new Error('vish, deu ruim!');
// return response.json();
// })
// .then((data) => { 
// return console.log(data.value);
// })
// .catch((err) => {
// return console.log(err.message);
// })