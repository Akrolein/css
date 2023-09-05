const menu = document.querySelector(".left-menu");
const button = document.querySelector(".menu-btn");
const menuItems = document.querySelectorAll("#list li");
const angleicon = document.querySelector(".menu-btn .fa-angles-left");
const icon = document.querySelector(".menu-btn .fa-bars");

let menuVisible = true;

button.onclick = () => {
    if (menuVisible) {
        menu.classList.add("off-menu");
        icon.classList.remove("off");
        angleicon.classList.add("off");
    } else {
        menu.classList.remove("off-menu");
        menu.classList.add("on-menu");
        icon.classList.add("off");
        angleicon.classList.remove("off");
    }
    menuVisible = !menuVisible;
}

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const link = item.querySelector("a");
        if (link) {
            window.location.href = link.getAttribute("href");
        }
    });
});