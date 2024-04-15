
const container = document.querySelector('#container');
const newCardButton = document.querySelector('#new_card');
newCardButton.addEventListener('click', createDraggableCard);

export function createDraggableCard() {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardTitleBar = document.createElement('div');
    cardTitleBar.classList.add('card-title-bar');

    const titleDiv = document.createElement('div');
    titleDiv.textContent = 'Note Title';

    const trashDiv = document.createElement('div');
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fa-solid', 'fa-trash');
    trashDiv.appendChild(trashIcon);

    cardTitleBar.appendChild(titleDiv);
    cardTitleBar.appendChild(trashDiv);
    card.appendChild(cardTitleBar);
    container.appendChild(card);

    let isDragging = false;
    let offsetX, offsetY;

    card.addEventListener('mousedown', startDragging);
    function startDragging(event) {
        isDragging = true;
        offsetX = event.clientX - card.getBoundingClientRect().left;
        offsetY = event.clientY - card.getBoundingClientRect().top;
    
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }

    function drag(event) {
        event.preventDefault();
        const x = event.clientX - offsetX;
        const y = event.clientY - offsetY;
        card.style.left = `${x}px`;
        card.style.top = `${y}px`;
    }
    function stopDragging() {
        isDragging = false;
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
    }
}
