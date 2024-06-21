function adjustPlayerHeight() {
    const bioElement = document.querySelector('.bio');
    const playerElement = document.getElementById('player');
    const headerContentElement = document.querySelector('.header-content');
    const spotifyPlayerElement = document.getElementById('spotify-player');

    const bioHeight = bioElement.clientHeight;
    const headerHeight = headerContentElement.clientHeight;
    const maxHeight = 700;

    if (window.innerWidth > 767) {
        const playerTop = headerHeight * 0.65;
        const newHeight = bioHeight + (headerHeight - playerTop);

        const finalHeight = Math.min(newHeight, maxHeight);
        playerElement.style.height = finalHeight + 'px';
        spotifyPlayerElement.style.height = finalHeight + 'px';
    }
}

window.addEventListener('resize', adjustPlayerHeight);
window.addEventListener('load', adjustPlayerHeight);


// // youtube container
function adjustHeights() {
    const youtubeContainer = document.querySelector('.youtube-container');
    const bckElement = document.querySelector('.bck');
    const youtubeIframe = document.querySelector('.youtube');

    // Get the height of the youtube container
    const youtubeContainerHeight = youtubeContainer.clientHeight;

    // Calculate the height for the iframe to maintain the 16:9 aspect ratio
    const iframeWidth = youtubeContainer.clientWidth;
    const iframeHeight = iframeWidth * 9 / 16;

    // Set the height of the iframe
    youtubeIframe.style.height = iframeHeight + 'px';

    // Set the height of bck so that part of the iframe fits within it
    const bckHeight = iframeHeight - youtubeContainerHeight;
    bckElement.style.height = bckHeight + 'px';
}

// Adjust the height on window resize and load
window.addEventListener('resize', adjustHeights);
window.addEventListener('load', adjustHeights);

// Initial call to set the height on page load
adjustHeights();

// youtubeContainer END!!!!!!!!!!!