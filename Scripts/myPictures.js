document.addEventListener('DOMContentLoaded', () => {
    const myPicturesModal = document.getElementById('myPicturesModal');
    const closeMyPicturesButton = myPicturesModal.querySelector('#close-myPictures');
    const thumbnailsContainer = myPicturesModal.querySelector('#thumbnails');
    const carouselContainer = myPicturesModal.querySelector('.carousel');
    const carouselImages = carouselContainer.querySelector('.carousel-images');
    const prevImageButton = carouselContainer.querySelector('#prevImage');
    const nextImageButton = carouselContainer.querySelector('#nextImage');

    if (!myPicturesModal || !closeMyPicturesButton || !thumbnailsContainer || !carouselContainer || !carouselImages || !prevImageButton || !nextImageButton) {
        console.error("One or more elements not found. Check your HTML structure.");
        return;
    }

    const images = [
        './pictures/picture1.jpg',
        './pictures/picture2.jpg',
        './pictures/picture3.jpg',
        './pictures/picture4.jpg',
        './pictures/picture5.jpg',
        './pictures/picture6.jpg'
    ];
    let currentIndex = 0;

    // Function to render thumbnails
    const renderThumbnails = () => {
        thumbnailsContainer.innerHTML = '';
        images.forEach((src, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = src;
            imgElement.alt = `Thumbnail ${index + 1}`;
            imgElement.addEventListener('dblclick', () => {
                console.log(`Thumbnail ${index + 1} clicked`);
                currentIndex = index;
                openCarousel();
            });
            thumbnailsContainer.appendChild(imgElement);
        });
    };

    // Function to render the current image in the carousel
    const renderImage = () => {
        console.log('Rendering image:', images[currentIndex]);
        carouselImages.innerHTML = '';
        const imgElement = document.createElement('img');
        imgElement.src = images[currentIndex];
        imgElement.alt = `Image ${currentIndex + 1}`;
        imgElement.onload = () => console.log('Image loaded:', images[currentIndex]);
        imgElement.onerror = () => console.error('Failed to load image:', images[currentIndex]);
        carouselImages.appendChild(imgElement);
    };

    // Show previous image in the carousel
    const showPrevImage = () => {
        console.log('Previous button clicked');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        renderImage();
    };

    // Show next image in the carousel
    const showNextImage = () => {
        console.log('Next button clicked');
        currentIndex = (currentIndex + 1) % images.length;
        renderImage();
    };

    // Function to open the carousel view
    const openCarousel = () => {
        console.log('Opening carousel view');
        renderImage();
        thumbnailsContainer.classList.add('hidden');
        carouselContainer.classList.remove('hidden');
        carouselContainer.style.display = 'flex';  
    };

    // Function to open My Pictures (thumbnail view)
    const openMyPictures = () => {
        console.log('Opening My Pictures (thumbnail view)');
        renderThumbnails();
        thumbnailsContainer.classList.remove('hidden');
        carouselContainer.classList.add('hidden');
        carouselContainer.style.display = 'none';  
        myPicturesModal.classList.remove('hidden');
        myPicturesModal.style.display = 'flex';
    };

    // Close My Pictures
    closeMyPicturesButton.addEventListener('click', () => {
        console.log('Close button clicked');
        myPicturesModal.classList.add('hidden');
        myPicturesModal.style.display = 'none';
    });

    // Event listener for My Pictures icon
    const myPicturesIcon = document.querySelector('.icon[data-app="myPictures"]');
    myPicturesIcon.addEventListener('dblclick', openMyPictures);

    // Event listeners for carousel controls
    prevImageButton.addEventListener('click', showPrevImage);
    nextImageButton.addEventListener('click', showNextImage);
});
