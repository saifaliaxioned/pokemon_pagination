const navLink = document.querySelectorAll(".nav-items a"),
  locations = location.pathname,
  pokemonItems = document.querySelector('.pokemon-items'),
  pokemonWrapper = document.querySelector('.pokemon-section .wrapper');

let limit = 12,
  offset = 0,
  totalData = 120,
  pages = totalData / limit,
  url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

const ul = document.createElement('ul');
ul.className = "pagination-items";
// creating previous btn
const prevBtn = document.createElement('a'),
  prevLi = document.createElement('li');
prevBtn.className = "prev-btn";
prevBtn.innerText = "Previous";
prevBtn.href = '#FIXME';
prevLi.appendChild(prevBtn);
ul.prepend(prevLi);
// creating buttons 
for (let i = 1; i <= pages; i++) {
  const li = document.createElement('li');
  const btn = document.createElement('a');
  btn.className = "btn";
  btn.href = "#FIXME"
  btn.innerText = i;
  li.appendChild(btn);
  ul.appendChild(li);
};
// creating next btn
pokemonWrapper.appendChild(ul);
const nextBtn = document.createElement('a'),
  nextLi = document.createElement('li');
nextBtn.className = "next-btn";
nextBtn.innerText = "Next";
nextBtn.href = '#FIXME';
nextLi.appendChild(nextBtn);
ul.appendChild(nextLi);
// global variable declaration end here

navLink.forEach(el => {
  const link = el.getAttribute("href");
  if (locations === link) {
    const active = document.querySelector(".active-link");
    if (active) {
      active.classList.remove("active-link")
    }
    el.classList.add("active-link");
  }
});


// api fetching start here
const fetchFunction = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      getApiData(data);

    } else {
      throw (`${response.status}`);
    }
  } catch (error) {
    console.log(error);
  }
}
fetchFunction();
const getApiData = data => {
  const value = data.results;
  value.forEach(res => {
    const fetchUrl = async () => {
      try {
        const urlRes = await fetch(res.url);
        if (urlRes.ok) {
          const allData = await urlRes.json(),
            image = allData.sprites.other.dream_world.front_default;
          createData(allData, image);
        } else {
          throw (`${urlRes.status} not found`);
        }
      } catch (er) {
        console.log(er);
      }
    }
    fetchUrl();

    pokemonWrapper.insertBefore(pokemonItems, pokemonWrapper.children[1]);
  });

}

const createData = (data, image) => {
  const pokemonList = document.createElement('li');
  pokemonList.classList.add('poke-list');
  pokemonList.innerHTML = `<figure class="poke"><img src=${image} alt=${data.name}></figure>
  <h2 class="poke-name">${data.name}</h2>`
  pokemonItems.appendChild(pokemonList);
}


// next pagination start here
const next = document.querySelector('.next-btn'),
  prev = document.querySelector('.prev-btn');

next.addEventListener("click", (e) => {
  prev.classList.remove('disable-btn');
  offset += 12;
  e.preventDefault();
  let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  url = nextUrl;
  next.href = "";
  next.href = url;
  pokemonItems.innerHTML = '';
  fetchFunction(url);
  if (offset === 108) {
    next.classList.add('disable-btn');
    next.style.pointerEvents = "none";
  }
});

// next pagination end here
// previous pagination strat here
prev.addEventListener("click", (e) => {
  next.classList.remove('disable-btn');
  e.preventDefault();
  if (offset != 0) {
    offset -= 12;
    console.log(offset);
    let nextUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    url = nextUrl;
    prev.href = url;
    pokemonItems.innerHTML = '';
    fetchFunction(url);
  }
});
// previous pagination end here