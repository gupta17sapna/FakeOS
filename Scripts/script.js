document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");

    const icons = document.querySelectorAll('.icon');
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalButton = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModalButtons = document.querySelectorAll('#close-modal, #close-media-player');
    const mediaPlayerIcon = document.querySelector('.icon[data-app="mediaPlayer"]');
    const mediaPlayerModal = document.getElementById('mediaPlayerModal');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const videoPlayer = document.getElementById('videoPlayer');

    console.log("Icons: ", icons);
    console.log("Start Button: ", startButton);
    console.log("Start Menu: ", startMenu);
    console.log("Modal: ", modal);
    console.log("Modal Overlay: ", modalOverlay);
    console.log("Close Modal Button: ", closeModalButton);

    // Hide modal by default
    modal.classList.add('hidden');
    modal.style.display = 'none';

    // Hide start menu by default
    startMenu.classList.add('hidden');
    startMenu.style.display = 'none';

    // Hide media player modal by default
    mediaPlayerModal.classList.add('hidden');
    mediaPlayerModal.style.display = 'none';

    // Event listener for icons (double click to open app)
    icons.forEach(icon => {
        icon.addEventListener('dblclick', (event) => {
            console.log(`Icon ${icon.dataset.app} clicked`);
            openApp(icon.dataset.app);
        });
    });

    // Event listener for start button
    startButton.addEventListener('click', () => {
        console.log("Start button clicked");
        startMenu.classList.toggle('hidden');
        startMenu.style.display = startMenu.classList.contains('hidden') ? 'none' : 'block';
    });

    // Event listener for close modal buttons
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeModal();
            closeMediaPlayer();
        });
    });

    // Event listeners for media player buttons
    playButton.addEventListener('click', () => {
        videoPlayer.play();
    });

    pauseButton.addEventListener('click', () => {
        videoPlayer.pause();
    });

    // Event listener for modal overlay to close modal when clicked outside content
    modalOverlay.addEventListener('click', () => {
        console.log("Modal overlay clicked");
        closeModal();
    });

    const openApp = (appId) => {
        console.log(`Opening app: ${appId}`);
        if (appId === 'mediaPlayer') {
            openMediaPlayer();
        } else {
            modalTitle.textContent = appId;
            modalBody.innerHTML = getAppContent(appId);
            modal.classList.remove('hidden');
            modal.style.display = 'flex';  
        }
    };

    const closeModal = () => {
        console.log("Closing modal");
        modal.classList.add('hidden');
        modal.style.display = 'none';  
    };

    const openMediaPlayer = () => {
        console.log("Opening media player");
        mediaPlayerModal.classList.remove('hidden');
        mediaPlayerModal.style.display = 'flex'; 
    };

    const closeMediaPlayer = () => {
        console.log("Closing media player");
        mediaPlayerModal.classList.add('hidden');
        mediaPlayerModal.style.display = 'none';  
    };

    // Event listener to close modal when Escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
            closeMediaPlayer();
        }
    });

    const getAppContent = (appId) => {
        console.log(`Getting content for app: ${appId}`);
        switch (appId) {
            case 'fileExplorer':
                return '<p>This is my computer.</p>';
            case 'recycleBin':
                return '<p>This is the Recycle Bin content.</p>';
            case 'myDocuments':
                return '<p>This is the My Documents content.</p>';
            case 'internetExplorer':
                return '<iframe src="https://www.example.com" width="100%" height="100%"></iframe>';
            case 'calculator':
                return `
                    <div class="calculator">
                        <div class="output" id="output"></div>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                        <button>/</button>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                        <button>*</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>-</button>
                        <button>0</button>
                        <button>.</button>
                        <button>=</button>
                        <button>+</button>
                    </div>
                `;
            case 'controlPanel':
                return '<p>This is the Control panel content.</p>';
            case 'notepad':
                    return '<p>This is the notepad content.</p>';
        }
    };

    const updateTime = () => {
        const now = new Date();
        document.getElementById('time').textContent = now.toLocaleTimeString();
    };

    setInterval(updateTime, 1000);
    updateTime();
});
