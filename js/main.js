//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

const url = `https://pokeapi.co/api/v2/pokemon/1/`;

const pokeImg1 = document.querySelector("#pokeImg1");
const pokeImg2 = document.querySelector("#pokeImg2");
const pokeName1 = document.querySelector("#pokemonName1");
const pokeName2 = document.querySelector("#pokemonName2");
const pokemonType1 = document.querySelector("#type1");
const pokemonType2 = document.querySelector("#type2");

// const url = "https://pokeapi.co/api/v2/pokemon/" + poke1;
// const url2 = "https://pokeapi.co/api/v2/pokemon/" + poke2;
// let pokeStore = [];
// let pokeImg = [];
function getFetch() {
  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);

      //look up two diff pokemon in data array,
      // const random1 = Math.floor(Math.random() * 20);

      //refers to img tag in html, makes pokemon image appears on button click
      pokeImg1.src = data.sprites.front_shiny;
    });
}

//       fetch(url2)
//         .then((res) => res.json()) // parse response as JSON
//         .then((data) => {
//           pokeStore.push(data.types[0].type.name);
//           pokeImg.push(data.sprites.front_shiny);

//           if (pokeStore[0] === "fire" && pokeStore[1] === "water") {
//             document.querySelector("#pokeImg1").src = pokeImg[0];
//             document.querySelector("#pokeImg2").src = pokeImg[1];
//             document.querySelector("h2").innerText = " 2x > ";
//           }
//         })
//         .catch((err) => {
//           console.log(`error ${err}`);
//         });
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }
