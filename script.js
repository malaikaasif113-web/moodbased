function showRecipe(mood){

var title =
document.getElementById("title");

var description =
document.getElementById("description");

var food =
document.getElementById("foodList");

food.innerHTML = "";

if(mood=="happy"){

title.innerHTML =
"Desserts";

description.innerHTML =
"Something sweet for your good mood.";

food.innerHTML =
"<li>Chocolate Cake</li>"+
"<li>Brownies</li>"+
"<li>Vanilla Ice Cream</li>";

}

else if(mood=="sad"){

title.innerHTML =
"Quick Meals";

description.innerHTML =
"Simple food with less effort.";

food.innerHTML =
"<li>Sandwich</li>"+
"<li>Pasta</li>"+
"<li>Omelette</li>";

}

else{

title.innerHTML =
"Restaurant Style";

description.innerHTML =
"Meals that feel special.";

food.innerHTML =
"<li>Chicken Alfredo</li>"+
"<li>Grilled Chicken</li>"+
"<li>Molten Cake</li>";

}

document.getElementById("recipe")
.style.display="block";

}
