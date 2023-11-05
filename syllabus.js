const toggleMode = document.querySelector('.toggle-mode');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const pcol = document.querySelector('.col3');
const syllabusImage = document.querySelector('.syllabus');
const topContainer = document.querySelector('.top-container');

toggleMode.addEventListener('click', function () {
    const sunIcon = toggleMode.querySelector('.sun');
    const moonIcon = toggleMode.querySelector('.moon');

    body.classList.toggle('dark-mode');
    header.classList.toggle('header-dark-mode');

    if (body.classList.contains('dark-mode')) {
        pcol.style.color = 'white';
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
        topContainer.style.background = '#1c2020';
    } else {
        pcol.style.color = 'black';
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
        topContainer.style.background = 'radial-gradient(#fff, rgb(255, 191, 191))';
    }

    const links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
        link.classList.toggle('header-dark-mode');
    });

    const titles = document.querySelectorAll('.project-section-title, .project-card-title');
    titles.forEach(function (title) {
        title.classList.toggle('dark-mode');
    });

    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);

});


const savedDarkMode = localStorage.getItem('dark-mode');
if (savedDarkMode === 'true') {
    toggleMode.click();
}