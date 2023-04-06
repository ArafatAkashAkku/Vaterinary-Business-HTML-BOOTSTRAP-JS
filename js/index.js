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