fetch("http//:local/3000/artData")
.then(res => res.json())
.then(artistData => {
    artistDisplay(artData),
    showCaseArtist(artData[0]),
    addNewArtist()

})

const artistDiplayNav = document.querySelector("artistDisplay")

const artistName = document.querySelector(".artistName")
const image = document.querySelector(".detail-image")
const artTitle = document.querySelector(".title")
const highlight = document.querySelector(".isHighlight")
const likes = document.querySelector(".likes-details")

function artistDisplay(artData) {
    artData.forEach(art => {
        const eachArt = document.createElement('img')
        eachArt.src =art.image
        .artDisplayNav.appendChild(eachArt)
        eachArt.addEventListener('click', event => {
            showCaseArtist(art)
        })
        eachArt.addEventListener('mouseover', event => {
            addGlow(event, eachArt);
        })
    })
}

function addGlow(event, image) {
    const colors = ['red', 'blue', 'green'];
    const randomColor = [Math.floor(Math.random() * colors.length)];
    
}