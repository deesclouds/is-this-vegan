# is-this-vegan

Project is live! 
[https://is-this-vegan.netlify.com]

<p align="center" width="800" height="600"><img src="https://user-images.githubusercontent.com/77818241/200143584-1470771b-91c4-4aa3-a686-e77cdf97e615.gif" alt="is-this-vegan-gif"/></p> 

***This app checks if a food product is vegan.***

It does this by finding the product that matches the UPC code entered. It then cycles through the ingredients and returns a value of yes, no, idk and maybe.

Yes = Green *The ingredient is vegan*
idk & maybe = Yellow *Means that there is an uncertainty if the ingredient in the product is vegan*
No = RED *Means that it is definitely sure that the product is not vegan*

"Is this vegan" receives information from Api calls to Open Food Facts[https://us.openfoodfacts.org/] then displays product ingredients to the user whether f the product is vegan or not. 

## Getting Started

How to use Quagga for scanning barcodes:

Install Quagga: npm install quagga

Import dependency into project: 

```
import Quagga from 'quagga'; // ES6
const Quagga = require('quagga').default; // Common JS (important: default)
```