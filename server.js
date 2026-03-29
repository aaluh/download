'use strict';

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/download/:videoId', (req, res) => {
    const videoId = req.params.videoId;
    const videoPath = path.join(__dirname, 'videos', `${videoId}.mp4`); // Adjust the path to your video files

    fs.stat(videoPath, (err, stats) => {
        if (err) {
            console.error('File not found:', err);
            return res.status(404).send('File not found');
        }

        res.writeHead(200, {
            'Content-Type': 'video/mp4',
            'Content-Length': stats.size,
            'Content-Disposition': `attachment; filename=${videoId}.mp4`
        });

        const fileStream = fs.createReadStream(videoPath);
        fileStream.pipe(res);
        fileStream.on('error', (fileErr) => {
            console.error('Stream error:', fileErr);
            res.status(500).send('Internal Server Error');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
