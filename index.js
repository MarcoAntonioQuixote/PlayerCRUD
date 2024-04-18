
let url = `https://662076ed3bf790e070afcf5e.mockapi.io/players`

let container = document.getElementById('players')

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        for (let player of data) {

            const card = document.createElement('div');
            const image = document.createElement('img');
            const title = document.createElement('h2');

            image.src = player.image;
            title.innerText = `${player.firstName} with ${player.wins} wins`
            card.setAttribute('class','card');

            card.addEventListener('click', () => {
                modifyPlayer(player)
            })

            card.append(image,title);
            container.append(card);
        }
    })

function modifyPlayer(player) {

    fetch(`${url}/${player.id}`,{
        method: 'PUT',
        body: JSON.stringify({firstName: 'Mark Anthony', wins: 1000000}),
        headers: { 'content-type': 'application/json' }
    })
}

// let url = 'https://pokeapi.co/api/v2/pokemon'

// let pokemon = {};

// let ids = [59,25,151,149,94,500]

// for (let id of ids) {

//     fetch(`${url}/${id}`)
//         .then(res => res.json())
//         .then(data => makeCard(data))
//         .catch(error => console.log(error));
// }

// function makeCard(data) {
            
//     const card = document.createElement('div');
//     const image = document.createElement('img');
//     const text = document.createElement('h2');

//     let name = data.name;
//     let imageURL = data.sprites.front_default;
//     let type = data.types[0].type.name;

//     text.innerText = `${name} | ${type}`;
//     image.src =  imageURL; 
//     card.setAttribute('class',`card ${type}`);

//     card.append(image,text)
//     document.body.append(card);
// }

