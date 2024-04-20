import { handleDelete } from './settings/delete_note.js';
import { handleToggle } from './settings/drop_down_up.js';
import { iconToggleUP } from './utils/icons.js';
import { changeColor, changeTextColor } from './settings/changecolor.js';

// Constants
export const container = document.getElementById('container');

// Variables for dragging functionality
let newPosX = 0, newPosY = 0, startPosX = 0, startPosY = 0;
let selectedElement;

// Function to add a new item to the container
export async function addItem(elem) {
    const uuid = uuidv4();
    const element = `<div class="card" data-id="${uuid}">
        <div class="card-title-bar" data-id="${uuid}">
            <div id="toggle-${uuid}">${iconToggleUP}</div>
            <div style="display: flex; gap: 15px">
                <div id="settings-${uuid}"><i class="fa-solid fa-ellipsis"></i></div>
                <div id="remove-${uuid}"><i class="fa-solid fa-trash"></i></div>
            </div>
        </div>
        <div class="card-body">
            <textarea class="ss" data-id="${uuid}"></textarea>
        </div>
        <div class="card-footer">
            <h4><i class="fa-solid fa-gear"></i>  Settings</h4>
            <div class="line"></div>
            <div class="card-footer-items">
                <div>
                    <label for="bgcolor">BG Color:</label>
                    <input id="input-${uuid}" type="color" value="#A6DCE9">
                </div>
                <div>
                    <label for="textcolor">Text Color:</label>
                    <input id="input-text-${uuid}" type="color" value="#3c3c3c">
                </div>
            </div>
        </div>
    </div>`;

    elem.insertAdjacentHTML('beforeend', element);
    // Event listeners
    const cardTitleBar = document.querySelector(`.card-title-bar[data-id="${uuid}"]`);
    cardTitleBar.addEventListener("mousedown", mouseDown);

    const toggleBtn = document.getElementById(`toggle-${uuid}`);
    toggleBtn.addEventListener('click', handleToggle);

    const settingsBtn = document.getElementById(`settings-${uuid}`);
    settingsBtn.addEventListener('click', openSettings);
   

    const inputColor = document.getElementById(`input-${uuid}`);
    inputColor.addEventListener('input', changeColor);
    
    const inputTextColor = document.getElementById(`input-text-${uuid}`);
    inputTextColor.addEventListener('input', changeTextColor);

    const removeBtn = document.getElementById(`remove-${uuid}`);
    removeBtn.addEventListener('click', handleDelete);

    const textArea = document.querySelector(`.card-body textarea[data-id="${uuid}"]`);
    textArea.addEventListener('input', autoGrow);
    autoGrow.call(textArea);
}

// Function to automatically adjust textarea height
function autoGrow() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// Function to handle mouse move during dragging
function mouseMove(e) {
    newPosX = startPosX - e.clientX;
    newPosY = startPosY - e.clientY;
  
    startPosX = e.clientX;
    startPosY = e.clientY;

    const draggableRect = selectedElement.getBoundingClientRect();
    const maxX = window.innerWidth - draggableRect.width;
    const maxY = window.innerHeight - draggableRect.height;

    let newX = selectedElement.offsetLeft - newPosX;
    let newY = selectedElement.offsetTop - newPosY;
    newX = Math.max(0, Math.min(newX, maxX));
    newY = Math.max(0, Math.min(newY, maxY));

    selectedElement.style.top = newY + "px";
    selectedElement.style.left = newX + "px";
}

// Function to handle mouse down event for dragging
function mouseDown(e) {
    e.preventDefault();

    if (e.target.tagName === 'NAV') {
        console.log("Shame");
        return;
    }

    const items = document.querySelectorAll('.card-title-bar');
    selectedElement = e.target.parentElement;

    startPosX = e.clientX;
    startPosY = e.clientY;

    items.forEach(item => item.parentElement.style.zIndex = 0);
    selectedElement.style.zIndex = 999;

    selectedElement.classList.add('dragging');
    selectedElement.classList.remove('dropped');

    document.addEventListener('mousemove', mouseMove);

    document.addEventListener('mouseup', () => {
        const id = selectedElement.dataset.id;
        selectedElement.classList.remove('dragging');
        selectedElement.classList.add('dropped');
        document.removeEventListener('mousemove', mouseMove);
    });
}

function openSettings(event) {
    // Find the closest ancestor element with the class "card"
    const card = event.target.closest('.card');
    // If a card element is found
    if (card) {
        // Find the settings bar within the card
        const settingsBar = card.querySelector('.card-footer');
        // If settings bar exists
        if (settingsBar) {
            // Toggle the visibility of the settings bar by toggling a CSS class
            settingsBar.classList.toggle('visible');
        }
    }
}

