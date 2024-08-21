
// Link underlining for active link in nav bar
window.addEventListener('DOMContentLoaded', () => {
    const currPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname;
        if(linkPath === currPath) {
            link.classList.add('navSelected');
        }
    })
});