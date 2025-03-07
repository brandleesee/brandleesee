const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png'
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function displayImages() {
    shuffleArray(images); // Shuffle the images
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous images

    // Create img elements and append to the gallery
    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = "A beautiful image"; // Add alt text for accessibility
        gallery.appendChild(img);
    });
}

displayImages();
