function color() {
    for (let i = 0; i < 100; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        document.querySelector(".wrap").appendChild(box);
    }
}

const button = document.querySelector(".refresh");
const colorBox = document.querySelectorAll(".box");

function randomHexColor() {
    let characters = "0123456789abcdef";
    let color = "";

    for (var i = 0; i < 6; i++) {
        let randomColor = Math.floor(Math.random() * characters.length);
        color += characters.substring(randomColor, randomColor + 1);
    }
    return "#" + color;
}

button.addEventListener("click", addColor)

function addColor() {
    colorBox.forEach(e => {
        let newColor = randomHexColor();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    });
}
color();