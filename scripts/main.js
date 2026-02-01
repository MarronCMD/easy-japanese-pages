var humberger = document.getElementById('header-humberger');
var humbergerClose = document.getElementById('nav-close');
var nav = document.getElementById('nav');
var navBackground = document.getElementById('nav-bg');
humberger.onclick = function () {
    if (nav.style.left == "0")
    {
        nav.style.left = "-100%";
        navBackground.style.display = "none";
    }
    else {
        nav.style.left = "0";
        navBackground.style.display = "unset";
    }
}

humbergerClose.onclick = function () {
    nav.style.left = "-100%";
    navBackground.style.display = "none";
}
navBackground.onclick = function () {
    nav.style.left = "-100%";
    navBackground.style.display = "none";
}