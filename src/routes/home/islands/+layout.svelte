<script>
    import Card from "../Card.svelte";
    import CardContainer from "../CardContainer.svelte";

    let images = [
        {
            src: "/island Sagittarius.png",
            alt: "Sagittarius Island",
            info1: "/Island_sagittarius_info.jpg",
        },
        {
            src: "/island Capricorn.png",
            alt: "Capricorn Island",
            info1: "/Island_capricorn_info.jpg",
        },
        {
            src: "/island Aquarius.png",
            alt: "Aquarius Island",
            info1: "/Island_aquarius_info.jpg",
        },
        {
            src: "/island Pisces.png",
            alt: "Pisces Island",
            info1: "/Island_pisces_info.jpg",
        },
        {
            src: "/island Aries.png",
            alt: "Aries Island",
            info1: "/Island_aries_info.jpg",
        },
        {
            src: "/island Taurus.png",
            alt: "Taurus Island",
            info1: "/Island_taurus_info.jpg",
        },
        {
            src: "/island Gemini.png",
            alt: "Gemini Island",
            info1: "/Island_gemini_info.jpg",
        },
        {
            src: "/island Cancer.png",
            alt: "Cancer Island",
            info1: "/Island_cancer_info.jpg",
        },
        {
            src: "/island Leo.png",
            alt: "Leo Island",
            info1: "/Island_leo_info.jpg",
        },
        {
            src: "/island Virgo.png",
            alt: "Virgo Island",
            info1: "/Island_virgo_info.jpg",
        },
        {
            src: "/island Libra.png",
            alt: "Libra Island",
            info1: "/Island_libra_info.jpg",
        },
        {
            src: "/island Scorpio.png",
            alt: "Scorpio Island",
            info1: "/Island_scorpio_info.jpg",
        },
    ];
</script>

<div class="home-container">
    <div class="content">
        <h1>ISLANDS</h1>
    </div>
</div>

<CardContainer bind:images />

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
</style>
