import { getPokedex } from './fetch.js';

// import functions
console.log('app js is running');
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const button = document.querySelector('#button');

//test
console.log('elements ', template, list);
//load api data
async function loadPokedex() {
    const pokedex = await getPokedex();

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);
        
        const name = clone.querySelector('#pokemon-name');
        const defense = clone.querySelector('#defense');
        const attack = clone.querySelector('#attack');
        const image = clone.querySelector('#image');
        const hp = clone.querySelector('#hp');
        
        // console.log('testvar', name, defense, attack, image, hp); test passed

        name.textContent = pokemon.pokemon;
        image.src = pokemon.url_image;
        hp.textContent = 'Hit points: ' + pokemon.hp;
        attack.textContent = 'Attack Points: ' + pokemon.attack;
        defense.textContent = 'Defense Points: ' + pokemon.defense;

        list.appendChild(clone);
    }

}

button.addEventListener('click', function displayCards(){
    loadPokedex();
});

    // set event listeners 

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

