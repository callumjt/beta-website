const navbarMain = document.createElement("div");
navbarMain.classList = "navbar";
const firstChild = document.body.firstChild;
document.body.insertBefore(navbarMain, firstChild);

// main navbar

const navbarLeft = document.createElement("div");
navbarLeft.classList = "left";

const navbarLeftIcon = document.createElement("img");
navbarLeftIcon.src = "/srcs/img/pic1.png";
navbarLeftIcon.classList = "navbarImg";

const navbarLeftText = document.createElement("p");
navbarLeftText.textContent = "Callumjt";
navbarLeftText.classList = "leftText"
navbarLeftText.style.userSelect = "none";

navbarMain.appendChild(navbarLeft);
navbarLeft.appendChild(navbarLeftIcon);
navbarLeft.appendChild(navbarLeftText);

// left of the navbar

const navbarRight = document.createElement("div");
navbarRight.classList = "right";

const navbarButton1 = document.createElement("div");
navbarButton1.classList = "button";
navbarButton1.textContent = "Home";
const navbarButton1R = document.createElement("a");
navbarButton1R.href = "/";
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    navbarButton1.style.color = "#3b82f6";
    // navbarButton1.style.textShadow = "5px 0px 30px #001BFF";
}

const navbarButton2 = document.createElement("div");
navbarButton2.classList = "button";
navbarButton2.textContent = "Games";
const navbarButton2R = document.createElement("a");
navbarButton2R.href = "/downloads";
if (window.location.pathname === "/downloads" || window.location.pathname === "/downloads.html") {
    navbarButton2.style.color = "#3b82f6";
    // navbarButton2.style.textShadow = "5px 0px 30px #001BFF";
}

const navbarButton3 = document.createElement("div");
navbarButton3.classList = "button";
navbarButton3.textContent = "Devlog";
const navbarButton3R = document.createElement("a");
navbarButton3R.href = "/devlogs";
if (window.location.pathname === "/devlogs.html" || window.location.pathname === "/devlogs") {
    navbarButton3.style.color = "#3b82f6";
    // navbarButton3.style.textShadow = "5px 0px 30px #001BFF";
}

const lightToggle = document.createElement("img");
const lightToggleDiv = document.createElement("div");
lightToggleDiv.classList = "lightToggle";
lightToggle.src = "/srcs/img/dark.svg";
lightToggle.id = "lightToggle";

navbarMain.appendChild(navbarRight);
navbarRight.appendChild(navbarButton1R);
navbarButton1R.appendChild(navbarButton1);
navbarRight.appendChild(navbarButton2R);
navbarButton2R.appendChild(navbarButton2);
navbarRight.appendChild(navbarButton3R);
navbarButton3R.appendChild(navbarButton3);
navbarRight.appendChild(lightToggleDiv);
lightToggleDiv.appendChild(lightToggle);

if (document.documentElement.scrollTop == 0) {
    // navbarMain.style.backgroundColor = "rgba(0, 0, 0, 0)";
    navbarMain.style.backdropFilter = "blur(0px)";
} else {
    navbarMain.style.backgroundColor = "var(--navbar-bg)";
    navbarMain.style.backdropFilter = "blur(10px)";
}

// right of the navbar

document.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop == 0) {
        // navbarMain.style.backgroundColor = "rgba(0, 0, 0, 0)";
        navbarMain.style.backdropFilter = "blur(0px)";
    } else {
        navbarMain.style.backgroundColor = "var(--navbar-bg)";
        navbarMain.style.backdropFilter = "blur(10px)";
    }
})

// checks if top of page
