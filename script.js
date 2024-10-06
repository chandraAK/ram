// Loader Animation
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Dark Mode Toggle
document.getElementById('darkmode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
