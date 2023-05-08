fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]')
.then(res => res.json())
.then(objectID => console.log(primaryImage))

