

<script>
    import Card from "../Card.svelte";
    // Képek adatai
    const images = [
        { src: "/island Sagittarius.png", alt: "Sagittarius Island" },
        { src: "/island Capricorn.png", alt: "Capricorn Island" },
        { src: "/island Aquarius.png", alt: "Aquarius Island" },
        { src: "/island Pisces.png", alt: "Pisces Island" },
        { src: "/island Aries.png", alt: "Aries Island" },
        { src: "/island Taurus.png", alt: "Taurus Island" },
        { src: "/island Gemini.png", alt: "Gemini Island" },
        { src: "/island Cancer.png", alt: "Cancer Island" },
        { src: "/island Leo.png", alt: "Leo Island" },
        { src: "/island Virgo.png", alt: "Virgo Island" },
        { src: "/island Libra.png", alt: "Libra Island" },
        { src: "/island Scorpio.png", alt: "Scorpio Island" },
    ];
</script>

<div class="home-container">
    <div class="content">
        <h1>ISLANDS</h1>
    </div>
</div>
<!-- Felső sor -->
<div class="grid grid-cols-6 gap-4 mb-4">
    {#each images.slice(0, 6) as image}
            <img src={image.src} alt={image.alt} class="islands" />
    {/each}
</div>

<!-- Alsó sor -->
<div class="grid grid-cols-6 gap-4">
    {#each images.slice(6) as image}
        <img src={image.src} alt={image.alt} class="islands" />
    {/each}
</div>

<style>
    .home-container {
        margin-left: 300px;
        display: flex;
    }

    .content {
        flex: 1;
        padding: 4px;
        background: url("/background6.jpg") no-repeat center center fixed;
        justify-content: right;
        text-shadow:
            -1.5px 0 black,
            0 1.5px black,
            1.5px 0 black,
            0 -1.5px black;
        color: white;
        align-items: right;
        font-size: 24px;
    }
    .islands {
        height: 200px;
        width: 200px;
        object-fit: cover;
        padding: 5px;
        padding-top: 50px;
        padding-bottom: 50px;
        margin-top: 20px;
        margin-left: 20px;
    }
    .islands:hover {
        transform: scale(1.06); /* minimális nagyítás */
        border-image: 0 0 10px rgba(255, 255, 255, 0.5);
    }
</style>
