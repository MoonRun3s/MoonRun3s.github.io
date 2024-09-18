function getTheme() {
    return localStorage.getItem('theme') || 'light';
}

function saveTheme(theme) {
    localStorage.setItem('theme', theme);
}

function applyTheme(theme) {
    if (theme === "dark") {
        r.style.setProperty("--white", "#F2EFE7");
        r.style.setProperty("--black", "#121212");
        r.style.setProperty("--orange", "#f37521");
    } else {
        r.style.setProperty("--white", "#121212");
        r.style.setProperty("--black", "#F2EFE7");
        r.style.setProperty("--orange", "#f33321");
    }
}

window.addEventListener("DOMContentLoaded", event => {
    var r = document.querySelector(":root");
    var theme = getTheme();
    applyTheme(theme);
    const themeButton = document.getElementById("theme");
    themeButton.addEventListener("click", event => {
        theme = theme === "dark" ? "light" : "dark";
        applyTheme(theme);
        saveTheme(theme);
        return false;
    });
});