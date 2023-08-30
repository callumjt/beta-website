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
navbarButton2.textContent = "Projects";
const navbarButton2R = document.createElement("a");
navbarButton2R.href = "/projects";
if (window.location.pathname === "/projects" || window.location.pathname === "/projects/index.html") {
    navbarButton2.style.color = "#3b82f6";
    // navbarButton2.style.textShadow = "5px 0px 30px #001BFF";
}

const navbarButton3 = document.createElement("div");
navbarButton3.classList = "button";
navbarButton3.textContent = "Devlog";
const navbarButton3R = document.createElement("a");
navbarButton3R.href = "/devlogs";
if (window.location.pathname === "/devlogs" || window.location.pathname === "/devlogs/index.html") {
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

// mobile dropdown down here

const navbarRightMobile = document.createElement('div')
navbarRightMobile.classList = "rightMobile"

const navbarRightMobileButton = document.createElement('div')
navbarRightMobileButton.classList = "dropdownButton"

const navbarRightMobileImg = document.createElement('img')
navbarRightMobileImg.src = '/srcs/img/3\ lines.svg'

navbarMain.appendChild(navbarRightMobile)
navbarRightMobile.appendChild(navbarRightMobileButton)
navbarRightMobileButton.appendChild(navbarRightMobileImg)

const dropdown = document.createElement('div')
dropdown.classList = "dropdown"
dropdown.style.display = "none"

const navbarButton11 = document.createElement("div");
navbarButton11.classList = "button";
navbarButton11.textContent = "Home";
const navbarButton1R1 = document.createElement("a");
navbarButton1R1.href = "/";
if (window.location.pathname === "/" || window.location.pathname === "/index.html") {
    navbarButton11.style.color = "#3b82f6";
    // navbarButton1.style.textShadow = "5px 0px 30px #001BFF";
}

const navbarButton21 = document.createElement("div");
navbarButton21.classList = "button";
navbarButton21.textContent = "Projects";
const navbarButton2R1 = document.createElement("a");
navbarButton2R1.href = "/projects";
if (window.location.pathname === "/projects" || window.location.pathname === "/projects/index.html") {
    navbarButton21.style.color = "#3b82f6";
    // navbarButton2.style.textShadow = "5px 0px 30px #001BFF";
}

const navbarButton31 = document.createElement("div");
navbarButton31.classList = "button";
navbarButton31.textContent = "Devlog";
const navbarButton3R1 = document.createElement("a");
navbarButton3R1.href = "/devlogs";
if (window.location.pathname === "/devlogs" || window.location.pathname === "/devlogs/index.html") {
    navbarButton31.style.color = "#3b82f6";
    // navbarButton3.style.textShadow = "5px 0px 30px #001BFF";
}

navbarMain.appendChild(dropdown)
dropdown.appendChild(navbarButton1R1)
navbarButton1R1.appendChild(navbarButton11)
dropdown.appendChild(navbarButton2R1)
navbarButton2R1.appendChild(navbarButton21)
dropdown.appendChild(navbarButton3R1)
navbarButton3R1.appendChild(navbarButton31)

var dropdownState = false;

if (window.innerWidth <= 630) {
    navbarRight.style.display = "none"
    navbarRightMobile.style.display = "inherit"
} else {
    navbarRight.style.display = "inherit"
    navbarRightMobile.style.display = "none"
}

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

window.addEventListener('resize', function(a) {
    if (window.innerWidth <= 630) {
        navbarRight.style.display = "none"
        navbarRightMobile.style.display = "inherit"
    } else {
        navbarRight.style.display = "inherit"
        navbarRightMobile.style.display = "none"
        navbarMain.style.height = "70px"
        dropdownState = false
    }
})

navbarRightMobile.addEventListener('click', function(a) {
    dropdownState = dropdownState == true ? false : true
    dropdown.style.display = dropdownState == true ? "inherit" : "none"
    navbarMain.style.height = dropdownState == true ? '100%' : '70px'
})
