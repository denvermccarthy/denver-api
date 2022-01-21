import { getPokedex } from './fetch.js';
import { getStarWarsPeople } from './fetch.js';

// import functions
console.log('app js is running');
// grab DOM elements
const template = document.querySelector('template');
const list = document.querySelector('#list');
const select = document.querySelector('#select');



//test
console.log('elements ', template, list, select,);
//load api data
async function loadPokedex() {
    const pokedex = await getPokedex();

    for (let pokemon of pokedex) {
        const clone = template.content.cloneNode(true);
        
        const name = clone.querySelector('.name');
        const defense = clone.querySelector('.defense');
        const attack = clone.querySelector('.attack');
        const image = clone.querySelector('#image');
        const hp = clone.querySelector('.hp');
        const url = clone.querySelector('#url');
        
        console.log('testvar', name, defense, attack, image, hp); // test passed

        name.textContent = pokemon.pokemon;
        image.src = pokemon.url_image;
        hp.textContent = 'Hit points: ' + pokemon.hp;
        attack.textContent = 'Attack Points: ' + pokemon.attack;
        defense.textContent = 'Defense Points: ' + pokemon.defense;
        url.href = pokemon.pokedex;

        list.classList.add('pokemon');
        list.appendChild(clone);
        // starList.remove();
    }

}
async function loadVader() {
    const starWars = await getStarWarsPeople();

    for (let starwars of starWars) {
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector('.star-name');
        const birthYear = clone.querySelector('#birth-year');
        const eyeColor = clone.querySelector('.eye-color');
        const height = clone.querySelector('.height');

        console.log('testvarstar', name, birthYear, eyeColor, height);

        name.textContent = starwars.name;
        birthYear.textContent = starwars.birth_year;
        eyeColor.textContent = starwars.eye_color;
        height.textContent = starwars.height;

        list.classList.add('starwars');

        list.appendChild(clone);
        // pokeList.remove();
    }

    
}

select.addEventListener('change', async(e) => {
    const selected = e.target.selectedIndex;
    const clear = document.querySelector('#list');
    if (selected === 0) {
       // clear all divs before populating
        clear.textContent = '';
        await loadPokedex();
        list.classList.remove('starwars');
       
       
        // console.log('POKE');
    } else {
      // clear all divs before populating
        clear.textContent = '';
        loadVader();
        list.classList.remove('pokemon');
    
        // console.log('I am your father.');  
    }
});

    // set event listeners 

    // get user input
    // use user input to update state 
    // update DOM to reflect the new state

