<div class="scene">
    <div class="moon"></div>
    <img class="cloud0" src="assets/img/dark_cloud1.png" alt="A dark cloud image">
    <img class="cloud1" src="assets/img/dark_cloud3.png" alt="A dark cloud image">
    <img class="cloud2" src="assets/img/dark_cloud2.png" alt="A dark cloud image">
    <img class="cloud3" src="assets/img/dark_cloud3.png" alt="A dark cloud image">
    <img class="cloud4" src="assets/img/dark_cloud4.png" alt="A dark cloud image">
    <img class="cloud5" src="assets/img/dark_cloud5.png" alt="A dark cloud image">
    <img class="cloud6" src="assets/img/dark_cloud3.png" alt="A dark cloud image">
    <img class="cloud7" src="assets/img/dark_cloud5.png" alt="A dark cloud image">
    <img class="cloud8" src="assets/img/dark_cloud4.png" alt="A dark cloud image">
    <img class="cloud9" src="assets/img/dark_cloud2.png" alt="A dark cloud image">


    <img class="forest" src="assets/img/dark_forest2.png" alt="A dark forest image">
</div>












<script>
    function stars() {
        let scene = document.querySelector(".scene");

        for (let i = 0; i < 200; i++) {
            let star = document.createElement("i");
            let x = Math.floor(Math.random() * window.innerHeight) * 2;
            let y = Math.floor(Math.random() * window.innerWidth);
            let duration = Math.floor(Math.random() * 10) + 1;
            let size = Math.random() * 2;
            console.log(duration)

            star.style.left = x + "px";
            star.style.top = y + "px";
            star.style.width = 1 + size + "px";
            star.style.height = 1 + size + "px";


            star.style.animationDuration = 5 + duration + 's';

            scene.appendChild(star);
        }
    }
    stars();
</script>















<div class="all_story">

    <section class="p_story_1">
        <h1>Premier paragraphe histoire</h1>
    </section>


    <section class="p_story_2">
        <h1>Deuxième paragraphe histoire</h1>
    </section>


    <section class="p_story_3">
        <h1>Troisième paragraphe histoire</h1>
    </section>

    <section class="p_story_4">
        <h1>Quatrième paragraphe histoire</h1>
    </section>


    <section class="p_story_5">
        <h1>Cinquième paragraphe histoire</h1>
    </section>
</div>