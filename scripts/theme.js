window.addEventListener("DOMContentLoaded", event => {
    var r = document.querySelector(":root");
    var dark = false;
    const theme = document.getElementById("theme");
    theme.addEventListener("click", event => {
        if (dark) {
            r.style.setProperty("--white", "#F2EFE7");
            r.style.setProperty("--black", "#121212");
            r.style.setProperty("--orange", "#f37521");
            dark = false;
        } else {
            r.style.setProperty("--white", "#121212");
            r.style.setProperty("--black", "#F2EFE7");
            r.style.setProperty("--orange", "#f33321");
            dark = true;
        }
        return false;
    });
});