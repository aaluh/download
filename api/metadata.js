const extractVideoMetadata = (video) => {
    // Assuming video is an object with necessary properties
    const title = video.title || 'Untitled';
    const description = video.description || 'No description available.';
    const thumbnail = video.thumbnail || 'No thumbnail available.';
    const filename = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${new Date().toISOString().slice(0, 10)}.mp4`;

    return { title, description, thumbnail, filename };
};

module.exports = extractVideoMetadata;
