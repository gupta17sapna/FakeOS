document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.icon');
    const startButton = document.getElementById('startButton');
    const startMenu = document.getElementById('startMenu');
    const notepadModal = document.getElementById('notepadModal');

    // Event listeners for desktop icons
    icons.forEach(icon => {
        icon.addEventListener('dblclick', (event) => {
            const appId = icon.dataset.app;
            console.log(`Icon ${appId} clicked`);
            if (appId === 'mediaPlayer') {
                openMediaPlayer();
            } else if (appId === 'notepad') {
                openNotepad();
            } else if (appId === 'myPictures') {
                openMyPictures();
            }
        });
    });

    // Event listener for start button
    startButton.addEventListener('click', () => {
        console.log("Start button clicked");
        startMenu.classList.toggle('hidden');
        startMenu.style.display = startMenu.classList.contains('hidden') ? 'none' : 'block';
    });

    // Open media player function
    const openMediaPlayer = () => {
        console.log("Opening media player");
        const mediaPlayerModal = document.getElementById('mediaPlayerModal');
        mediaPlayerModal.classList.remove('hidden');
        mediaPlayerModal.style.display = 'flex';
    };

    // Open notepad function
    const openNotepad = () => {
        initNotepad();
    };

    // Update time function
    const updateTime = () => {
        const now = new Date();
        document.getElementById('time').textContent = now.toLocaleTimeString();
    };

    // Set interval to update time every second
    setInterval(updateTime, 1000);
    updateTime();
});
