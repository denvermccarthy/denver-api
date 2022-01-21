import { getPokedex } from './fetch.js';

// import functions
console.log('app js is running');
// grab DOM elements
const template = document.querySelector('#template');
const list = document.querySelector('#list');
const select = document.querySelector('#select');

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
        const url = clone.querySelector('#url')
        
        // console.log('testvar', name, defense, attack, image, hp); test passed

        name.textContent = pokemon.pokemon;
        image.src = pokemon.url_image;
        hp.textContent = 'Hit points: ' + pokemon.hp;
        attack.textContent = 'Attack Points: ' + pokemon.attack;
        defense.textContent = 'Defense Points: ' + pokemon.defense;
        url.href = pokemon.pokedex;

        list.appendChild(clone);
    }

}
async function loadVader() {
    console.log('Luke');
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

