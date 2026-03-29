const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Metadata extraction endpoint
app.post('/api/extract-metadata', (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required.' });
    }
    
    // Simulate metadata extraction (replace this with actual implementation)
    const metadata = { 
        title: 'Sample Video', 
        description: 'This is a description of the video.', 
        duration: 120,
        thumbnail: 'http://example.com/thumbnail.jpg'
    };
    
    return res.status(200).json(metadata);
});

// Video download endpoint
app.post('/api/download-video', (req, res) => {
    const { url } = req.body;
    
    if (!url) {
        return res.status(400).json({ error: 'URL is required.' });
    }
    
    // Simulate video download (replace this with actual implementation)
    const videoPath = '/path/to/downloaded/video.mp4';
    res.download(videoPath, 'video.mp4', (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error downloading video.' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
