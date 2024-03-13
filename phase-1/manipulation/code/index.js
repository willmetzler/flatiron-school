/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("#today"));

/* 
SELECT CLASS with ".classname"
SELECT ID with "#idname"
*/

// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll("p").forEach(pElement => {
    console.log(pElement);
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.

// ~ Update/Modify a node's attributes
/* 
- We're usually either modifying its text elements or its attributes
- First step of modifying is reading
*/
document.querySelector("#today").style.color = "red";
console.log(document.querySelector("#today").textContent = "Today!");
// -> To modify an attribute, just use = after the attribute name in object dot notation


// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove()

// ~ Create + Append a node
// -> createElement(), append()
const image = document.createElement("img");
image.src = "https://woofwell.com/cdn/shop/files/Golden-Retriever-Health-WoofWell-Breed-Specific-Dog-Supplements_1600x.jpg?v=1621360789";
document.body.append(image);

document.querySelector("#image-container").append(image)
//once you call createElement, it doesn't just auto go on the page
//we need to modify it to give it a source
//we need to append that newly created node to a parent as well


// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and ["The Shining"]
//    the function should append to #dates something like:
//        Books
//        • The Shining


function displayList(name, array) {
    const div = document.querySelector("#dates");

    const heading = document.createElement("h2");
    heading.textContent = name;
    div.appendChild(heading);
  
    const list = document.createElement("ul");
    div.appendChild(list);
  
    array.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }

displayList("New Books", ["The Stand", "Fairy Tale", "11/22/63"])

// 2. Replace the <strong> element with a newly created one.

const address = document.querySelector("strong")
address.remove();
const newAddress = document.createElement("em")
newAddress.textContent = address.textContent
document.body.appendChild(newAddress);


