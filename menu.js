const pages = [
    { title: "Home", url: "index.html" },
    { title: "Page 1", url: "page1.html" },
    { title: "Page 2", url: "page2.html" }
    // Add more pages as needed
];

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.innerHTML = pages.map(page => `<li><a href="${page.url}">${page.title}</a></li>`).join('');
});
