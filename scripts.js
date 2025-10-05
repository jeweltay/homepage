// Dark/Light Mode Toggle
function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const icon = document.querySelector('.theme-toggle i');

    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-sun');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-lightbulb');
    }
}

// Project Filtering
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // Filter projects
    projects.forEach(project => {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);

    // Set correct icon
    const icon = document.querySelector('.theme-toggle i');
    if (savedTheme === 'light') {
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-sun');
    }
});