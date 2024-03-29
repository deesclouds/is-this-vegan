document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('button').addEventListener('click', displayBorder)

function displayBorder(){
    document.querySelector('#product-img').style.border = '7em inset rgb(66, 222, 74)'
}

function getFetch(userInput) {
    let inputVal = document.getElementById('barcode').value

    if (inputVal.length !== 12) {
        alert(`Barcode must be 12 characters`)
        return;
    }

    const url = `https://world.openfoodfacts.org/api/v0/product/${inputVal}.json`

    fetch(url)
        .then(res => res.json()) // parses response as JSON data
        .then(data => {
            console.log(data)
            if (data.status === 1) { // if status is found 
                const item = new ProductInfo(data.product)
                item.showInfo()
                item.listIngredients()
            } else if (data.status === 0) { //if product is not fount
                alert(`Product ${inputVal} not found. Please try another.`)
                // barcode for trader joes needs to lead with 0000.
            }
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

class ProductInfo {
    constructor(productData) { //passes in data.product
        this.name = productData.product_name
        this.ingredients = productData.ingredients
        this.image = productData.image_url
        // can add info within the constructor dynamically by calling a method if it has certain features
    }
    showInfo() {
        document.getElementById('product-img').src = this.image
        document.getElementById('product-name').innerText = this.name

    }
    listIngredients() {
        let tableRef = document.getElementById
            ('ingredient-table')
        //loop that clears the data from the table
        for (let i = 1; i < tableRef.rows.length;) {
            //built in method to delete table rows
            tableRef.deleteRow(i)
        }
        if (!(this.ingredients == null)) {
            for (let key in this.ingredients) {
                let newRow = tableRef.insertRow(-1)
                let newICell = newRow.insertCell(0)
                let newVCell = newRow.insertCell(1)
                let newIText = document.createTextNode(
                    this.ingredients[key].text
                )
                let vegStatus = !(this.ingredients[key].vegan) ? 'idk' : this.ingredients[key].vegan
                let newVText = document.createTextNode(vegStatus)
                newICell.appendChild(newIText)
                newVCell.appendChild(newVText)
                if (vegStatus === 'no') {
                    // turn red
                    newVCell.classList.add('non-veg-item')
                } else if (vegStatus === 'idk' || vegStatus === 'maybe') {
                    //turn items yellow
                    newVCell.classList.add('idk-maybe-item')
                }
            }
        }
    }

}   