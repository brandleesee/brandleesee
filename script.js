// Step 1: Define your pool of image URLs
const images = [
    'stampi/001.png',
    'stampi/002.png',
    'stampi/003.png',
    'stampi/004.png',
    'stampi/005.png',
    'stampi/006.png',
    'stampi/007.png',
    'stampi/008.png',
    'stampi/009.png',
    'stampi/010.png',
    'stampi/011.png',
    'stampi/012.png',
    'stampi/013.png',
    'stampi/014.png',
    'stampi/015.png',
    'stampi/016.png',
    'stampi/017.png',
    'stampi/018.png',
    'stampi/019.png',
    'stampi/020.png',
    'stampi/021.png',
    'stampi/022.png',
    'stampi/023.png',
    'stampi/024.png',
    'stampi/025.png',
    'stampi/026.png',
    'stampi/027.png',
    'stampi/028.png',
    'stampi/029.png',
    'stampi/030.png'
];

// Step 2: Define your pool of poster URLs
const posters = [
    'posters/poster-001.jpg',
    'posters/poster-002.jpg',
    'posters/poster-003.jpg',
    'posters/poster-004.jpg',
    'posters/poster-005.jpg',
    'posters/poster-006.jpg',
    'posters/poster-007.jpg',
    'posters/poster-008.jpg',
    'posters/poster-009.jpg',
    'posters/poster-010.jpg',
    'posters/poster-011.jpg',
    'posters/poster-012.jpg',
    'posters/poster-013.jpg',
    'posters/poster-014.jpg',
    'posters/poster-015.jpg',
    'posters/poster-016.jpg',
    'posters/poster-017.jpg',
    'posters/poster-018.jpg',
    'posters/poster-019.jpg',
    'posters/poster-020.jpg',
    'posters/poster-021.jpg',
    'posters/poster-022.jpg',
    'posters/poster-023.jpg',
    'posters/poster-024.jpg',
    'posters/poster-025.jpg',
    'posters/poster-026.jpg',
    'posters/poster-027.jpg',
    'posters/poster-028.jpg',
    'posters/poster-029.jpg',
    'posters/poster-030.jpg',
    'posters/poster-031.jpg',
    'posters/poster-032.jpg',
    'posters/poster-033.jpg'
];

// Function to get random images without duplicates
function getRandomImages(arr, num) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

// Step 3: Display the random images in three columns
function displayImages() {
    const totalColumns = 3;
    const imagesPerColumn = 3; // Total 12 images across 3 columns
    const imageContainer1 = document.getElementById('imageContainer1');
    const imageContainer2 = document.getElementById('imageContainer2');
    const imageContainer3 = document.getElementById('imageContainer3');

    // Get 12 unique random images for the entire layout
    const randomImages = getRandomImages(images, totalColumns * imagesPerColumn);

    // Split the 12 images into 3 columns
    for (let i = 0; i < totalColumns; i++) {
        const columnImages = randomImages.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn);
        columnImages.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = 'Random Image';
            document.getElementById(`imageContainer${i + 1}`).appendChild(imgElement);
        });
    }
}

// Step 4: Display the posters in two columns
function displayPosters() {
    const totalPosterColumns = 2;
    const postersPerColumn = 2; // Total 4 posters across 2 columns
    const posterContainer1 = document.getElementById('posterContainer1');
    const posterContainer2 = document.getElementById('posterContainer2');

    // Get 4 unique random posters
    const randomPosters = getRandomImages(posters, totalPosterColumns * postersPerColumn);

    // Split the 4 posters into 2 columns
    for (let i = 0; i < totalPosterColumns; i++) {
        const columnPosters = randomPosters.slice(i * postersPerColumn, (i + 1) * postersPerColumn);
        columnPosters.forEach(poster => {
            const imgElement = document.createElement('img');
            imgElement.src = poster;
            imgElement.alt = 'Poster Image';
            document.getElementById(`posterContainer${i + 1}`).appendChild(imgElement);
        });
    }
}

// Execute the functions to display images and posters on page load
window.onload = function() {
    displayImages();
    displayPosters();
};
