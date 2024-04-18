import { addItem, container } from "./create_note.js";
import { stackCardsToLeft, stackCardsToRight } from "./stackToLeftRight.js";

const newCardButton = document.querySelector('#new_card');

newCardButton.addEventListener('click', async () => {
    addItem(container);
});


