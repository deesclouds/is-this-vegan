# is-this-vegan

<img 
     style="display:block;
            margin-left: 50px;
            margin-right: auto;
            width: 80%;"
src="https://user-images.githubusercontent.com/77818241/200143584-1470771b-91c4-4aa3-a686-e77cdf97e615.gif" alt="is-this-vegan-gif"> </img>

***This app checks if a food product is vegan.***

It does this by finding the product that matches the UPC code entered. It then cycles through the ingredients and returns a value of yes, no, idk and maybe.

Yes = Green *The ingredient is vegan*
idk & maybe = Yellow *Means that there is an uncertainty if the ingredient in the product is vegan*
No = RED *Means that it is definitely sure that the product is not vegan*

"Is this vegan" receives information from Api calls to Open Food Facts[https://us.openfoodfacts.org/] then displays product ingredients to the user whether f the product is vegan or not. 
