const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl) 
.then((resp) => resp.json())
.then((data) => addImages(data))



const dogImageContainer = document.querySelector("#dog-image-container")

function addImages(data) {
    data.message.forEach((image) => {
        const img = document.createElement("img")
        img.src = image
        img.style.width = "200px"
        img.style.height = "200px"
        dogImageContainer.append(img)
    })
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
.then(resp => resp.json())
.then(data => addBreeds(data))

const dogBreeds = document.querySelector("#dog-breeds")

function addBreeds(data) {
    for (const breed in data.message) {
        const li = document.createElement("li")
        li.textContent = breed
        dogBreeds.append(li)
    }
}

const breedDropdown = document.querySelector("#breed-dropdown")

breedDropdown.addEventListener("select", (e) => {
    const letter = e.target.value
    const allBreeds = document.querySelectorAll("li")
    allBreeds.forEach((breed) => {
        if (breed.textContent.startsWith(letter)) {
            breed.style.display = ""
        } else {
            breed.style.display = "none"
        }
    })
})









