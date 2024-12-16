const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files (CSS, JS, images)
app.use(express.static(__dirname));

// Route to get tarot image filenames
app.get('/api/tarot-images', (req, res) => {
    const imagesPath = path.join(__dirname, 'images');
    fs.readdir(imagesPath, (err, files) => {
        if (err) {
            res.status(500).json({ error: 'Failed to read images directory' });
            return;
        }
        const imageFiles = files.filter(file => file.endsWith('.jpg'));
        res.json(imageFiles);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
