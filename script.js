const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    if (inputValue.trim() !== "") {
        addItemToLocalStorage(inputValue)
        appendItemToShoppingListEl(inputValue)
    }
    clearInputFieldEl()
})

function clearInputFieldEl() {
    inputFieldEl.value = ""
}

function appendItemToShoppingListEl(itemValue) {
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}

let clearButtonEl = document.getElementById("clear-button")
clearButtonEl.addEventListener("click", function() {
    shoppingListEl.innerHTML = ""
    localStorage.removeItem("shoppingList")
    
});

let ulEl = document.getElementById("shopping-list")
ulEl.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove()
    }
})

// Store the shopping list item in the local storage
function addItemToLocalStorage(itemValue) {
    let shoppingList = getShoppingListFromLocalStorage()
    shoppingList.push(itemValue)
    localStorage.setItem("shoppingList", JSON.stringify(shoppingList))
}

// Retrieve the shopping list from the local storage
function getShoppingListFromLocalStorage() {
    let shoppingList = localStorage.getItem("shoppingList")
    if (shoppingList) {
        return JSON.parse(shoppingList)
    } else {
        return []
    }
}

// Retrieve the shopping list items from the local storage when the page loads
window.addEventListener("load", function() {
    let shoppingList = getShoppingListFromLocalStorage()
    shoppingList.forEach((itemValue) => {
        appendItemToShoppingListEl(itemValue)
    })
})