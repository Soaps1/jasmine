// script.js
document.querySelectorAll('aside nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        const content = document.querySelector('main section');
        content.innerHTML = `<h2>${this.textContent}</h2><p>You clicked on ${this.textContent}.</p>`;
    });
});
