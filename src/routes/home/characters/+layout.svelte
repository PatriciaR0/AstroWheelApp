<script>
    import CardContainer from "../CardContainer.svelte";
    hasMultipleImages={true}

    let images = [
        {
            src: "/npc Sagittarius.png",
            alt: "Sagittarius",
            info1: "/Sagittarius_info1.jpg",
            info2: "/Sagittarius_info2.jpg",
        },
        {
            src: "/npc Capricorn.png",
            alt: "Capricorn",
            info1: "/Capricorn_info1.jpg",
            info2: "/Capricorn_info2.jpg",
        },
        {
            src: "/npc Aquarius.png",
            alt: "Aquarius",
            info1: "/Aquarius_info1.jpg",
            info2: "/Aquarius_info2.jpg",
        },
        {
            src: "/npc Pisces.png",
            alt: "Pisces",
            info1: "/Pisces_info1.jpg",
            info2: "/Pisces_info2.jpg",
        },
        {
            src: "/npc Aries.png",
            alt: "Aries",
            info1: "/Aries_info1.jpg",
            info2: "/Aries_info2.jpg",
        },
        {
            src: "/npc Taurus.png",
            alt: "Taurus",
            info1: "/Taurus_info1.jpg",
            info2: "/Taurus_info2.jpg",
        },
        {
            src: "/npc Gemini.png",
            alt: "Gemini",
            info1: "/Gemini_info1.jpg",
            info2: "/Gemini_info2.jpg",
        },
        {
            src: "/npc Cancer.png",
            alt: "Cancer",
            info1: "/Cancer_info1.jpg",
            info2: "/Cancer_info2.jpg",
        },
        {
            src: "/npc Leo.png",
            alt: "Leo",
            info1: "/Leo_info1.jpg",
            info2: "/Leo_info2.jpg",
        },
        {
            src: "/npc Virgo.png",
            alt: "Virgo",
            info1: "/Virgo_info1.jpg",
            info2: "/Virgo_info2.jpg",
        },
        {
            src: "/npc Libra.png",
            alt: "Libra",
            info1: "/Libra_info1.jpg",
            info2: "/Libra_info2.jpg",
        },
        {
            src: "/npc Scorpio.png",
            alt: "Scorpio",
            info1: "/Scorpio_info1.jpg",
            info2: "/Scorpio_info2.jpg",
        },
    ];
</script>

<div class="home-container">
    <div class="content">
        <h1>CHARACTERS</h1>
    </div>
</div>

<CardContainer bind:images />

<style>
    .home-container {
        margin-left: 300px;
        display: flex;
        align-items: center;
    }

    .content {
        flex: 1;
        padding: 4px;
        background: url("/background3.jpg") no-repeat center center fixed;
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
</style>
