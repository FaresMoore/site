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

const tarotDeck = [
    { name: "The Fool", image: "images/the-fool.jpg" },
    { name: "The Magician", image: "images/the-magician.jpg" },
    { name: "The High Priestess", image: "images/the-high-priestess.jpg" },
    { name: "The Empress", image: "images/the-empress.jpg" },
    { name: "The Emperor", image: "images/the-emperor.jpg" },
    // Add all 78 cards similarly
];
