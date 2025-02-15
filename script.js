function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Example progress bar update
const progress = document.getElementById('progress');
const raised = document.getElementById('raised');
const remaining = document.getElementById('remaining');

let totalRaised = 5000; // Example amount
const goal = 20000;

progress.style.width = `${(totalRaised / goal) * 100}%`;
raised.innerText = `$${totalRaised}`;
remaining.innerText = `$${goal - totalRaised}`;
const galleryContainer = document.querySelector('.gallery-container');

// Pause rotation on hover
galleryContainer.addEventListener('mouseenter', () => {
  galleryContainer.style.animationPlayState = 'paused';
});

// Resume rotation on mouse leave
galleryContainer.addEventListener('mouseleave', () => {
  galleryContainer.style.animationPlayState = 'running';
});
