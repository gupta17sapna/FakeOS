document.addEventListener('DOMContentLoaded', () => {
  const mediaPlayerModal = document.getElementById('mediaPlayerModal');
  const closeMediaPlayerButton = mediaPlayerModal.querySelector('#close-media-player');
  const videoPlayer = document.getElementById('videoPlayer');
  const playButton = document.getElementById('playButton');
  const pauseButton = document.getElementById('pauseButton');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  const mediaTracks = [
      './media/first-song.mp3',
      './media/another-song.mp3',
      './media/yet-another-song.mp3',
      './media/last-song.mp3'
  ];
  let currentTrackIndex = 0;

  const loadTrack = (index) => {
      if (index < 0 || index >= mediaTracks.length) {
          console.error("Track index out of bounds");
          return;
      }
      videoPlayer.src = mediaTracks[index];
      videoPlayer.load();
  };

  const playTrack = () => {
      videoPlayer.play().catch(error => {
          console.log("Playback failed:", error);
      });
  };

  const pauseTrack = () => {
      videoPlayer.pause();
  };

  const nextTrack = () => {
      currentTrackIndex = (currentTrackIndex + 1) % mediaTracks.length;
      loadTrack(currentTrackIndex);
      playTrack();
  };

  const prevTrack = () => {
      currentTrackIndex = (currentTrackIndex - 1 + mediaTracks.length) % mediaTracks.length;
      loadTrack(currentTrackIndex);
      playTrack();
  };

  loadTrack(currentTrackIndex);

  playButton.addEventListener('click', playTrack);
  pauseButton.addEventListener('click', pauseTrack);
  nextButton.addEventListener('click', nextTrack);
  prevButton.addEventListener('click', prevTrack);

  closeMediaPlayerButton.addEventListener('click', () => {
      mediaPlayerModal.classList.add('hidden');
      mediaPlayerModal.style.display = 'none';
      pauseTrack(); // Ensure the track is paused when the modal is closed
  });
});
