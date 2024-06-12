// ADD NEW ITEM TO END OF LIST
const newGrocery = document.createElement('li');
const cream = document.createTextNode("cream");
newGrocery.appendChild(cream);
document.getElementsByTagName("ul")[0].appendChild(newGrocery);

// ADD NEW ITEM START OF LIST
const newLastGrocery = document.createElement('li');
const kale = document.createTextNode("kale");
newLastGrocery.appendChild(kale);
document.getElementsByTagName("ul")[0].insertBefore(newLastGrocery, document.getElementsByTagName("ul")[0].firstChild);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
const items = document.getElementsByTagName("li");
for (let i = 0; i < items.length; i++) {
  items[i].classList.add("cool");
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
const itemCount = items.length;
document.getElementsByTagName("h2")[0].innerHTML = "Buy Groceries" + '<span>' + itemCount + '</span>';
