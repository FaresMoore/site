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
