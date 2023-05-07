function renderOneArtist(artwork){
    //Build Artist
    let card = document.createElement('ul')
    card.className = 'card'
    card.innerHTML = `
   <img src="${artwork.primaryImage}" 
    <div class="content">
    <h4>${artwork.name}</h4>
    <p>
        $<span class="count">${artwork.donations}</span> Donated
    </p>
    <p>${artwork.description}</p>
    </div>
    <div class="buttons">
        <button> Donate $10 </button>
        <button> Set Fee</button>
    </div>
`
    {/* add artist to dom */}

    document.querySelector('#artist-list').appendChild(card)
}
   
 function getAllArtists(){
    fetch('http://localhost:3000/artworks') 
        .then(res => res.json())
        .then(artworks => artworks.forEach(artwork => renderOneArtist(artwork)))
            
        }
 
   
// {/* }get data and render artists to dom*/}

function initialize(){
    getAllArtists()
    console.log("get all artists")
}
initialize()