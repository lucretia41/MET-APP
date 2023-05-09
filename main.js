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

    image.style.borderColor = randomColor;
    image.style.borderWidth = '5px';
    image.style.borderStyle = 'solid';
    image.style.transition = 'border-color 0.5s, border-width 0.5s';

    setTimeout(() => {

    image.style.borderColor = '';
    image.style.borderWidth = '';
    image.style.borderStyle = '';
    image.style.transition = '';
 }, 1000),
}

function addGlowToArt(event, image) {
    const colors = ['red', 'blue', 'green'];
    const randomColor = [Math.floor(Math.random() * colors.length)];
    image.style.borderColor = '';
    image.style.borderWidth = '';
    image.style.borderStyle = '';
    image.style.transition = '';
}

function showCaseArtist(art) {
    artistName.textContent = artData.artistNameimage.src = artistName
    image.src = art.image
    artTitle.textContent = art.title
    likes.textContent = art.likes
    image.addEventListener('mousemove', event => {
        addGlowToArt(event, image);
    })
}


const newArtistName = document.querySelector('#newname')
const newImage = document.querySelector("new-art-image")
const newTitle = document.querySelector("#new-Title")
const newHighlight = document.querySelector('#new-highlight') 
const newLikes = document.querySelector(".new-likes")

function addNewArtist() {
    const newArtistForm = document.querySelector("#new-artists")
    newArtistForm.addEventListener("submit", event => {
        event.preventDefault()
        const newArtistName = {
            name:newArtistName.value,
            image: newImage.value,
            likes: newLikes.value,
            highlight: newHighlight.value,
            title: newTitle,

        }
        artistDiplayNav([newArt])
    })
}

