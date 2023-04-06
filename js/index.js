// right click disable 
document.oncontextmenu = (element) => {
    element.preventDefault();
}

// scroll progress bar
const container = document.querySelector("body");
const highlight = document.getElementById("bar-highlight");

window.onscroll = () => {
    // scroll progress bar
    let cheight = container.offsetHeight - window.innerHeight;
    let cpos = container.getBoundingClientRect();
    let diff = cheight + cpos.top;
    let progress = diff / cheight * 100;
    let csswidth = Math.floor(100 - progress);
    highlight.style.width = csswidth + "%";
}

// cookie set 
const cookieBox = document.querySelector(".cookie");
const acceptBtn = document.querySelector(".cookie .accept");
const rejectBtn = document.querySelector(".cookie .reject");

setTimeout(() => {
    cookieBox.style.visibility = "visible";
}, 5000);

rejectBtn.onclick = () => {
    cookieBox.style.visibility = "hidden";
    setTimeout(() => {
        cookieBox.style.visibility = "visible";
    }, 60000);
}

acceptBtn.onclick = () => {
    document.cookie = "fname=Arafat; max-age=" + 60 * 60 * 24 * 30;
    document.cookie = "lname=Akash; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {
        cookieBox.classList.add("hide");
    }
    else {
        alert("Cookie can't be set");
    }
}

let check = document.cookie.indexOf("fname=Arafat");
check != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");