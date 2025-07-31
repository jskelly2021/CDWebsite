
function changeStyle() {
    const element = document.getElementById("stylesheet");

    if(element.getAttribute("href") == "../styles/stylesheet1.css") {
        element.setAttribute("href", "../styles/stylesheet2.css");
    }
    else {
        element.setAttribute("href", "../styles/stylesheet1.css");
    }

    localStorage.setItem("style", element.getAttribute("href"));
}

window.onload = function() {
    let style = localStorage.getItem("style");
    const element = document.getElementById("stylesheet");
        if (!style) {
        style = "../styles/stylesheet1.css";
        localStorage.setItem("style", style);
    }
    element.setAttribute("href", style);
}
