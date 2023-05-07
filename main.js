function renderOneArtist(artist){
    //Build Artist
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML = `
   <img src="${artist.imageUrl}" 
    <div class="content">
    <h4>${artist.name}</h4>
    <p>
        $<span class="count">${artist.donations}</span> Donated
    </p>
    <p>${artist.description}</p>
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
        .then(artworks => artworks.forEach(artworks => renderOneArtist(artworks)))
            
        }
 
   
// {/* }get data and render artists to dom*/}

function initialize(){
    getAllArtists()
    console.log("get all artists")
}
initialize()




// {
//         document.addEventListener("DOMContentLoaded", function () {
//             console.log('The DOM has loaded');
//         });

//         console.log("this loads the dom");
    

//         console.log("works")

//         fetch("http:localhost:3000/artworks")
//             .then(response => response.json())
//             .then(artworks => {
//                 const container = document.querySelector("#artworkList");
//                 //   artworks.forEach(artwork => {
//                 //   })

//                 //   });
//             })

//         fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (title) {
//                 console.log(title);

//             });
//     };




//     // console.log("works")
//     // fetch("http:localhost:3000/artworks")
//     //     .then(response => response.json())
//     //     .then(artworks => {
//     //         const container = document.querySelector("ul#artworkList");
//     //         //   artworks.forEach(artwork => {
//     //         //   })

//     //         //   });
//     //     })

//     // fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects")
//     //     .then(function (response) {
//     //         return response.json();
//     //     })
//     //     .then(function (title) {
//     //         console.log(title);

//     //     });
//     fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID,isHighlight, primarySmallImage, artistDisplayName, artistsDisplayBio]")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (objectID) {
//             console.log(objectID);
//         });
//     // fetch("https://collectionapi.metmuseum.org/public/collection/v1/search")
//     //     .then(function (res) {
//     //         return res.json();

//     //     })
//     //     .then(function (objectsIDs) {
//     //         console.log(objectsIDs);
//     //     });

//     fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?isOnView=true&q=van gogh")
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (isOnView) {
//             console.log(isOnView)
//         });
//         fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]")
    



