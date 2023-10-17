import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://shoplist-d2491-default-rtdb.europe-west1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value

    if (inputValue.trim() !== "") {
    push(shoppingListInDB, inputValue)
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
});

let ulEl = document.getElementById("shopping-list")
ulEl.addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        event.target.remove()
    }
})
