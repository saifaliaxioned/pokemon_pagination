const navLink = document.querySelectorAll(".nav-link"),
  pagelink = document.querySelectorAll(".page-list a"),
  pokeList = document.querySelectorAll(".poke-list a"),
  pokeDetailName = document.querySelectorAll(".poke-detail-name"),
  pokemonCard = document.querySelectorAll(".pokemon-card"),
  locations = location.pathname,
  active = document.querySelector(".active-link");

// console.log(locations.split('/')[1]);
navLink.forEach(el => {
  // console.log(el);
  const link = el.getAttribute("href");
  // console.log(link.split('/')[1]);
  if (locations === link) {
    // if (active) {
    // }
    active.classList.remove("active-link");
    el.classList.add("active-link");
  }
});

pagelink.forEach(el => {
  const link = el.getAttribute("href");
  if (locations === link) {
    const active = document.querySelector(".active-link");
    if (active) {
      active.classList.remove("active-link")
    }
    el.classList.add("active-link");
  }
});


// pokeList.forEach(li => {
//   // console.log(li);
//   li.addEventListener('click', () => {
//     const link = li.getAttribute("href");
//     console.log(link);
//     console.log(locations);
//   })
// });

pokeDetailName.forEach(name => {
  if (name.innerHTML == locations.split('/')[2]) {
    navLink.forEach(el => {
      const link = el.getAttribute("href");
      if (link.split('/')[1] === 'pokemon') {
        active.classList.remove('active-link');
        el.classList.add('active-link');
      }
    })
  }
});