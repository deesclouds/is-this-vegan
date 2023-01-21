<h1 id="header" align="center">
is this thing vegan?
</h1>
<div align="center">

This project was built to help check if ingredients within food products are actually vegan.

<p align="center" width="800" height="600"><img src="images/vegan-app.gif" alt="gif of is-this-vegan"/></p>

**Link to project [here]** (https://is-this-vegan.netlify.com).<br>

**How It's Made:**
Tech used: HTML, CSS, JavaScript, product ingredients are pulled from  calls to [Open Food Facts API] (https://us.openfoodfacts.org), background image is from [Freepik](https//:freepik.com).

**How Does It Function?:**
Enter a UPC code within the input field then click the Get Info button.

"is this thing vegan?" cycles through the ingredients from the API and populates ingredients from the product within a table returning a value of yes, no, idk and maybe next to each ingredient.

- **yes** will be displayed in green for the ingredient is vegan.

- **idk or maybe** will be displayed in yellow if there is any uncertainty that the ingredient is vegan

- **no** will be displayed in red if there is absolute knowledge that the ingredient is not vegan.

"is-this-thing-vegan" receives information from API calls to [Open Food Facts](https://us.openfoodfacts.org/).

**Optimizations:**
Background image and styling were updated with the help of @xoladybugs so the project appeared more fun and playful.

**Lessons Learned:**
Some of the ingredients that the API aren't sure if it's vegan displays as idk and maybe. Some of those ingredients also appear to be vegan ingredients. More research needs to be done to determine if those ingredients are in fact vegan.

**Thank You!**
I got the idea to build this project from watching @Mayanwolfe's Twitch stream. @xoladybugs thanks for your help with improving the look and feel for this project. 
</div>
