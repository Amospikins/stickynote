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