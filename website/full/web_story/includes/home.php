<div class="scene">
    <div class="night"></div>
    <img class="forest" src="assets/img/dark_forest2.png" alt="A dark forest image">
</div>






















<script>
    function stars() {
        let scene = document.querySelector(".scene");

        for (let i = 0; i < 1250; i++) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerHeight);
            let y = Math.floor(Math.random() * window.innerWidth);
            let size = Math.random() * 2;

            star.style.left = x * 2 + "px";
            star.style.top = y * 2 + "px";
            star.style.width = 1 + size + "px";
            star.style.height = 1 + size + "px";

            scene.appendChild(star);
        }
    }
    stars();
</script>
















<article>
    <h1>Premier paragraphe histoire</h1>
    <section class="p_story_1"></section>
</article>
<article>
    <h1>Deuxième paragraphe histoire</h1>
    <section class="p_story_2"></section>
</article>
<article>
    <h1>Troisième paragraphe histoire</h1>
    <section class="p_story_3"></section>
</article>
<article>
    <h1>Quatrième paragraphe histoire</h1>
    <section class="p_story_4"></section>
</article>
<article>
    <h1>Cinquième paragraphe histoire</h1>
    <section class="p_story_5"></section>
</article>