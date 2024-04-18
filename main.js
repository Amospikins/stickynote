// Importing functions from "create_note.js" and "stackToLeftRight.js"
import { addItem, container } from "./create_note.js";
import { stackCardsToLeft, stackCardsToRight } from "./stackToLeftRight.js";

// Selecting the element with the ID "new_card"
const newCardButton = document.querySelector('#new_card');

// Adding an event listener to the newCardButton
newCardButton.addEventListener('click', async () => {
    // Invoking the addItem function with the container as an argument
    addItem(container);
});