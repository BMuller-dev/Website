function stars() {
    let scene = document.querySelector(".scene");

    for (let i = 0; i < 200; i++) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.floor(Math.random() * 10) + 1;
        let size = Math.random() * 2;

        star.style.left = x + "px";
        star.style.top = y + "px";
        star.style.width = 1 + size + "px";
        star.style.height = 1 + size + "px";


        star.style.animationDuration = 5 + duration + 's';

        scene.appendChild(star);
    }
}
stars()