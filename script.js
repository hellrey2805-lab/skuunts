function toggleTheme() {
    let theme = document.getElementById("theme");

    if (theme.getAttribute("href") === "style.css") {
        theme.setAttribute("href", "dark.css");
        localStorage.setItem("theme", "dark");
    } else {
        theme.setAttribute("href", "style.css");
        localStorage.setItem("theme", "light");
    }
}

// збереження теми
window.onload = function() {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.getElementById("theme").setAttribute("href", "dark.css");
    }
}