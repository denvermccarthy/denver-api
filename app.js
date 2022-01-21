import { getPokedex } from './fetch.js';
import { getStarWarsPeople } from './fetch.js';

// import functions
console.log('app js is running');
// grab DOM elements
const pokeTemplate = document.querySelector('#pokemon-template');
const pokeList = document.querySelector('#list1');
const select = document.querySelector('#select');
const starTemplate = document.querySelector('#starwars-template');
const starList = document.querySelector('#list2');


//test
console.log('elements ', pokeTemplate, pokeList, select, starTemplate, starList);
//load api data
async function loadPokedex() {
    const pokedex = await getPokedex();

    for (let pokemon of pokedex) {
        const clone = pokeTemplate.content.cloneNode(true);
        
        const name = clone.querySelector('#pokemon-name');
        const defense = clone.querySelector('#defense');
        const attack = clone.querySelector('#attack');
        const image = clone.querySelector('#image');
        const hp = clone.querySelector('#hp');
        const url = clone.querySelector('#url');
        
        // console.log('testvar', name, defense, attack, image, hp); test passed

        name.textContent = pokemon.pokemon;
        image.src = pokemon.url_image;
        hp.textContent = 'Hit points: ' + pokemon.hp;
        attack.textContent = 'Attack Points: ' + pokemon.attack;
        defense.textContent = 'Defense Points: ' + pokemon.defense;
        url.href = pokemon.pokedex;

        pokeList.appendChild(clone);
    }

}
async function loadVader() {
    const starWars = await getStarWarsPeople();

    for (let starwars of starWars) {
        const cloneStar = starTemplate.content.cloneNode(true);

        const starName = cloneStar.querySelector('#starwars-name');
        const birthYear = cloneStar.querySelector('#birth-year');
        const eyeColor = cloneStar.querySelector('#eye-color');
        const height = cloneStar.querySelector('#height');

       // console.log('testvar', starName, birthYear, eyeColor, height);

        starName.textContent = starwars.name;
        birthYear.textContent = starwars.birth_year;
        eyeColor.textContent = starwars.eye_color;
        height.textContent = starwars.height;

        starList.appendChild(cloneStar);
    }

    
}

select.addEventListener('change', async (e) => {
    const selected = e.target.selectedIndex;
    
    if (selected === 0) {
        await loadPokedex();
        console.log('POKE');
    } else {
        loadVader();
        console.log('I am your father.');  
    }
});

    // set event listeners 

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

