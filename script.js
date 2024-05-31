
        // function adjustPlayerHeight() {
        //     const bioElement = document.querySelector('.bio');
        //     const playerElement = document.getElementById('spotify-player').parentElement;
        //     const bioHeight = bioElement.clientHeight;

        //     if (window.innerWidth <= 767) {
        //         playerElement.style.height = 'auto';
        //         document.getElementById('spotify-player').style.height = 'auto';
        //     } else {
        //         const newHeight = bioHeight * 1.4;
        //         playerElement.style.height = newHeight + 'px';
        //         document.getElementById('spotify-player').style.height = newHeight + 'px';
        //     }
        // }

        // window.addEventListener('resize', adjustPlayerHeight);
        // window.addEventListener('load', adjustPlayerHeight);
 
        function adjustPlayerHeight() {
            const bioElement = document.querySelector('.bio');
            const playerElement = document.getElementById('player');
            const headerContentElement = document.querySelector('.header-content');
            const spotifyPlayerElement = document.getElementById('spotify-player');

            const bioHeight = bioElement.clientHeight;
            const headerHeight = headerContentElement.clientHeight;

            if (window.innerWidth <= 767) {
                playerElement.style.height = 'auto';
                spotifyPlayerElement.style.height = 'auto';
            } else {
                // Calculate the height so the bottom of the player aligns with the bottom of the bio
                const playerTop = headerHeight * 0.65;
                const newHeight = bioHeight + (headerHeight - playerTop);

                // Apply the new height
                playerElement.style.height = newHeight + 'px';
                spotifyPlayerElement.style.height = newHeight + 'px';
            }
        }

        window.addEventListener('resize', adjustPlayerHeight);
        window.addEventListener('load', adjustPlayerHeight);
