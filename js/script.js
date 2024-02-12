let display =document.querySelector(".list ul");
let icon_open =document.querySelector('.open');

icon_open.addEventListener("click", () => {
    display.classList.toggle("show");
    // Toggle the icon based on whether the list is shown or hidden
    if (display.classList.contains("show")) {
        icon_open.src = "assets/images/icon-menu-close.svg";
    } else {
        icon_open.src = "assets/images/icon-menu.svg";
    }
});

// Add event listener to remove "show" class when icon is clicked again to close the list
icon_open.addEventListener("click", () => {
    if (!display.classList.contains("show")) {
        display.classList.remove("show");
    }
});