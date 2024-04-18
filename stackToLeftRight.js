// Add event listener to the button
const stackToLeftBtn = document.getElementById('stackToLeftBtn');
const stackToRightBtn = document.getElementById('stackToRightBtn');

stackToLeftBtn.addEventListener('click', stackCardsToLeft);
stackToRightBtn.addEventListener('click', stackCardsToRight);

// Function to stack all cards to the left side of the window
export async function stackCardsToLeft() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const cards = document.querySelectorAll('.card');
    let totalHeight = 0;
    let topPosition = 10; // Initial top position
    let leftPosition = 10; // Initial left position

    // Calculate the total height of all cards
    cards.forEach(card => {
        totalHeight += card.offsetHeight + 10; // Height of card + spacing
    });

    // Check if the total height exceeds the window height
    if (totalHeight > windowHeight) {
        // Stack cards horizontally
        let currentRowHeight = 0;
        cards.forEach(card => {
            // If current row height exceeds window height, start new row
            if (currentRowHeight + card.offsetHeight + 10 > windowHeight) {
                leftPosition += card.offsetWidth + 10; // Move to next column
                topPosition = 10; // Reset top position for new row
                currentRowHeight = 0; // Reset current row height
            }
            card.style.left = leftPosition + 'px'; // Set left position
            card.style.top = topPosition + 'px'; // Set top position
            topPosition += card.offsetHeight + 10; // Increment top position by card height + spacing
            currentRowHeight += card.offsetHeight + 10; // Update current row height
        });
    } else {
        // Stack cards vertically
        cards.forEach(card => {
            card.style.left = '0'; // Align cards to the left
            card.style.top = topPosition + 'px'; // Set top position
            topPosition += card.offsetHeight + 10; // Increment top position by card height + spacing
        });
    }
}

// Function to stack all cards to the right side of the window
export async function stackCardsToRight() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const cards = document.querySelectorAll('.card');
    let totalHeight = 0;
    let topPosition = 10; // Initial top position
    let rightPosition = windowWidth - 10; // Initial right position

    // Calculate the total height of all cards
    cards.forEach(card => {
        totalHeight += card.offsetHeight + 10; // Height of card + spacing
    });

    // Check if the total height exceeds the window height
    if (totalHeight > windowHeight) {
        // Stack cards horizontally
        let currentRowHeight = 0;
        cards.forEach(card => {
            // If current row height exceeds window height, start new row
            if (currentRowHeight + card.offsetHeight + 10 > windowHeight) {
                rightPosition -= card.offsetWidth + 10; // Move to previous column (right side)
                topPosition = 10; // Reset top position for new row
                currentRowHeight = 0; // Reset current row height
            }
            card.style.left = (rightPosition - card.offsetWidth) + 'px'; // Set left position (align right edge of card)
            card.style.top = topPosition + 'px'; // Set top position
            topPosition += card.offsetHeight + 10; // Increment top position by card height + spacing
            currentRowHeight += card.offsetHeight + 10; // Update current row height
        });
    } else {
        // Stack cards vertically
        cards.forEach(card => {
            card.style.left = (windowWidth - card.offsetWidth - 10) + 'px'; // Align cards to the right
            card.style.top = topPosition + 'px'; // Set top position
            topPosition += card.offsetHeight + 10; // Increment top position by card height + spacing
        });
    }
}
