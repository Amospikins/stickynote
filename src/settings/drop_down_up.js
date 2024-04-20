import { iconToggleDown, iconToggleUP } from '../utils/icons.js'; // Assuming icons.js contains the icon definitions

export async function handleToggle() {
    const card = this.parentElement.parentElement;

    const titleBarFirstChild = card.querySelector('.card-title-bar > div:first-child');
    const textarea = card.querySelector('textarea');
    const cardBody = card.querySelector('.card-body');

    if (titleBarFirstChild.innerHTML === iconToggleUP) {
        // Collapse the card
        textarea.style.display = 'none';
        cardBody.classList.add('collapse');
        titleBarFirstChild.innerHTML = iconToggleDown;
    } else {
        // Expand the card
        textarea.style.display = 'block';
        cardBody.classList.remove('collapse');
        titleBarFirstChild.innerHTML = iconToggleUP;
    }
}
    