const splitButton = document.getElementById('split-button');
const imageContainer = document.getElementById('image-container');
const originalImage = document.getElementById('original-image');

splitButton.addEventListener('click', () => {
    const x = parseInt(document.getElementById('x-input').value);
    const y = parseInt(document.getElementById('y-input').value);

    if (isNaN(x) || isNaN(y) || x <= 0 || y <= 0) {
        alert('Please enter valid numbers for X and Y.');
        return;
    }

    // Clear previous slices
    imageContainer.innerHTML = '';

    // Add the new sliced images
    const imgWidth = originalImage.naturalWidth;
    const imgHeight = originalImage.naturalHeight;
    const sliceWidth = imgWidth / x;
    const sliceHeight = imgHeight / y;

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < x; j++) {
            const slice = document.createElement('div');
            slice.classList.add('sliced-image');
            slice.style.width = `${sliceWidth}px`;
            slice.style.height = `${sliceHeight}px`;
            slice.style.left = `${j * sliceWidth}px`;
            slice.style.top = `${i * sliceHeight}px`;
            slice.style.backgroundImage = `url('${originalImage.src}')`;
            slice.style.backgroundPosition = `-${j * sliceWidth}px -${i * sliceHeight}px`;
            slice.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;

            slice.addEventListener('click', () => {
                slice.classList.add('disappear');
                setTimeout(() => slice.remove(), 300); // Remove after animation
            });

            imageContainer.appendChild(slice);
        }
    }

    // Hide the original image
    originalImage.style.display = 'none';
});
