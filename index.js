const IncButton = document.getElementById("IncButton");
const DecButton = document.getElementById("DecButton");
const ResButton = document.getElementById("ResButton");
const counter = document.getElementById("count");
const buttons = document.getElementById("btns");
let count = 0;

// Theme switching functionality
const themeLightBtn = document.getElementById("theme-light");
const themeDarkBtn = document.getElementById("theme-dark");
const themeSystemBtn = document.getElementById("theme-system");

// Set initial theme based on system preference
function setInitialTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    setActiveThemeButton('system');
}

// Set active theme button
function setActiveThemeButton(theme) {
    themeLightBtn.classList.remove('active');
    themeDarkBtn.classList.remove('active');
    themeSystemBtn.classList.remove('active');

    if (theme === 'light') {
        themeLightBtn.classList.add('active');
    } else if (theme === 'dark') {
        themeDarkBtn.classList.add('active');
    } else {
        themeSystemBtn.classList.add('active');
    }
}

// Apply theme
function setTheme(theme) {
    // Remove any existing theme attributes
    document.documentElement.removeAttribute('data-theme');

    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        // System theme - check system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }

    // Update active button
    setActiveThemeButton(theme);
}

// Initialize theme
setInitialTheme();

// Theme button event listeners
themeLightBtn.addEventListener('click', () => setTheme('light'));
themeDarkBtn.addEventListener('click', () => setTheme('dark'));
themeSystemBtn.addEventListener('click', () => setTheme('system'));

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        // Only update if system theme is currently selected
        if (themeSystemBtn.classList.contains('active')) {
            setTheme('system');
        }
    });
}

// Counter functionality
IncButton.onclick = function () {
    count++;
    counter.textContent = count;
}

DecButton.onclick = function () {
    count--;
    counter.textContent = count;
}

ResButton.onclick = function () {
    count = 0;
    counter.textContent = count;
}