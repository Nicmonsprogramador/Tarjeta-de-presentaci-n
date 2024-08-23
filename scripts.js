document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff5722';
    });
    link.addEventListener('mouseout', () => {
        link.style.color = '#1a73e8';
    });
});
