const images = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '30.png'
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
