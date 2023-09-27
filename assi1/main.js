const themeButton = document.getElementById('theme-button');
const body = document.body;
let darkMode = false;

themeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    if (darkMode) {
        body.classList.add('dark-mode');
        themeButton.classList.remove('fa-moon'); // Remove moon icon
        themeButton.classList.add('fa-sun'); // Add sun icon
    } else {
        body.classList.remove('dark-mode');
        themeButton.classList.remove('fa-sun'); // Remove sun icon
        themeButton.classList.add('fa-moon'); // Add moon icon
    }
});

const userPrefersDarkMode = true; 
if (userPrefersDarkMode) {
    body.classList.add('dark-mode');
    themeButton.classList.remove('fa-moon'); // Remove moon icon
    themeButton.classList.add('fa-sun'); // Add sun icon
}
