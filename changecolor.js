import {darkenColor} from './darkercolor.js'
export function changeColor(e) {
    // Get the original color value
    const originalColor = e.target.value;

    // Calculate a darker shade of the original color
    const darkerColor = darkenColor(originalColor, 20); // Darken by 20%

    // Update the background color of the card body
    const cardBody = e.target.closest('.card').querySelector('.card-body');
    if (cardBody) {
        cardBody.style.backgroundColor = originalColor;
    }

    // Update the background color of the card title bar
    const cardTitleBar = e.target.closest('.card').querySelector('.card-title-bar');
    if (cardTitleBar) {
        cardTitleBar.style.backgroundColor = darkerColor;
    }

}


export function changeTextColor(event) {
    // Extract the color value from the event target
    const selectedColor = event.target.value;

    // Find the closest ancestor element with the class "card"
    const card = event.target.closest('.card');

    // If a card element is found
    if (card) {
        // Find the first child element of the card's second child (assuming card has at least two children)
        const noteBody = card.children[1]?.children[0];

        // If the noteBody exists, set its text color to the selected color
        if (noteBody) {
            noteBody.style.color = selectedColor;
        }
    }
}