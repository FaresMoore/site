const socket = io(); // Connect to the backend server

// Add functionality for dragging, dropping, and rotating tarot cards
document.addEventListener("DOMContentLoaded", () => {
    const whiteboard = document.getElementById("whiteboard");

    // Example: Add a card to the whiteboard
    const card = document.createElement("div");
    card.style.width = "100px";
    card.style.height = "150px";
    card.style.background = "blue";
    card.style.position = "absolute";
    card.style.left = "50%";
    card.style.top = "50%";
    whiteboard.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
    const tarotDropdown = document.getElementById("tarot-dropdown");

    // Populate the dropdown
    tarotImages.forEach((imageName) => {
        const option = document.createElement("option");
        option.value = imageName; // Set the value as the filename
        option.textContent = imageName.replace(/-/g, ' ').replace('.jpg', ''); // Format for readability
        tarotDropdown.appendChild(option);
    });

    // Event listener for card selection
    tarotDropdown.addEventListener("change", (event) => {
        const selectedImage = event.target.value;
        if (selectedImage) {
            addCardToWhiteboard(selectedImage);
        }
    });
});

// Function to add the selected card to the whiteboard
function addCardToWhiteboard(imageName) {
    const whiteboard = document.getElementById("whiteboard");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card"); // Add a class for styling
    cardElement.style.position = "absolute";
    cardElement.style.left = "50%";
    cardElement.style.top = "50%";

    const cardImage = document.createElement("img");
    cardImage.src = `images/${imageName}`;
    cardImage.alt = imageName.replace(/-/g, ' ').replace('.jpg', ''); // Format for accessibility
    cardImage.style.width = "100px"; // Adjust size
    cardImage.style.height = "150px";

    cardElement.appendChild(cardImage);
    whiteboard.appendChild(cardElement);
}
