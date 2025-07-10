// Handle nav link generation and login visibility
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    navLinks.innerHTML = ''; // Clear any existing links

    if (loggedIn) {
      navLinks.innerHTML += `
        <li><a href="course.html">Courses</a></li>
        <li><a href="progress.html">Progress</a></li>
        <li><a href="video.html">Video</a></li>
        <li><a href="#" onclick="logout()">Logout</a></li>
      `;
    } else {
      if(!
        window.location.href.includes('index.html')) {}     
      navLinks.innerHTML += `<li><a href="index.html">Login</a></li>`;
    }
  }
});

// Handle logout
function logout() {
  localStorage.setItem('loggedIn', 'false');
  window.location.href = 'index.html';
}

// Handle progress bar
function updateProgress(value) {
  const progress = document.getElementById('progress');
  const progressText = document.getElementById('progress-text');
  if (progress && progressText) {
    progress.style.width = value + '%';
    progressText.textContent = value + '%';
  }
}

// Handle video playback
function toggleVideoPlayback(videoId) {
  const video = document.getElementById(videoId);
  if (video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}