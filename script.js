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

function getRandomImages(imageArray, maxImages) {
    const shuffled = imageArray.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, maxImages);
}

function displayImages() {
    const grid = document.getElementById('image-grid');
    const randomImages = getRandomImages(images, 12);
    
    randomImages.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = "Random Image"; // Use appropriate alt text
        grid.appendChild(imgElement);
    });
}

// Load the images on window load
window.onload = displayImages;
