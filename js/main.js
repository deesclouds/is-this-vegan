document.querySelector('button').addEventListener('click', getFetch)

function getFetch(userInput){
    const choice = userInput
    const url = `https://world.openfoodfacts.org/api/v0/product/${choice}.json`

    fetch(url)
        .then(res => res.json()) // parse JSON data
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}
