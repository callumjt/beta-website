if (localStorage.getItem("colorScheme") !== "dark" && localStorage.getItem("colorScheme") !== "light") {
    localStorage.setItem("colorScheme", "dark");
};

var mode = localStorage.getItem("colorScheme");
document.getElementsByTagName('style')[0].innerHTML = "@import url(/js\\ &\\ css/" + mode + ".css);";
console.log(document.getElementsByTagName('style')[0].innerHTML)
lightToggle.src = "/srcs/img/" + mode + ".svg"



lightToggle.addEventListener("click", function() {
if (mode === "dark") {
    mode = "light";
    localStorage.setItem("colorScheme", "light");
} else {
    mode = "dark";
    localStorage.setItem("colorScheme", "dark");
}
document.getElementsByTagName('style')[0].innerHTML = "@import url(/js\\ &\\ css/" + mode + ".css);";
lightToggle.src = "/srcs/img/" + mode + ".svg"
});