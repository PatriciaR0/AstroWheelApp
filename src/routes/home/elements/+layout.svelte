<script>
    import CardContainer from "../CardContainer.svelte";

    let images = [
        {
            src: "/Amethyst.png",
            alt: "Amethyst",
            info1: "/amethyst_info.jpg",
        },
        {
            src: "/Cross stone.png",
            alt: "Cross stone",
            info1: "/cross_stone_info.jpg",
        },
        {
            src: "/Heliotrop.png",
            alt: "Heliotrop",
            info1: "/heliotrop_info.jpg",
        },
        {
            src: "/Fire agate.png",
            alt: "Fire agate",
            info1: "/Fire agate_info.jpg",
        },
        {
            src: "/ElixirofSecondChances.png",
            alt: "Elixir of Second Chances",
            info1: "/eosc_info.jpg",
        },
        {
            src: "/Hagymás boglárka.png",
            alt: "Bulbous buttercup",
            info1: "/Bulbous buttercup.jpg",
        },
        {
            src: "/Krisztuskorona.png",
            alt: "Calvary clover",
            info1: "/Calvary clover.jpg",
        },
        {
            src: "/Kanadai kapotnyak.png",
            alt: "Canadian snakeroot",
            info1: "/Canadian snakeroot.jpg",
        },
        {
            src: "/Közönséges gyújtoványfű.png",
            alt: "Common Toadflax",
            info1: "/Common Toadflax.jpg",
        },
        {
            src: "/Korallgyökér.png",
            alt: "Coral-root",
            info1: "/Coral root.jpg",
        },
        {
            src: "/Betyárkóró.png",
            alt: "Horseweed",
            info1: "/Horseweed.jpg",
        },
        {
            src: "/Közönséges ebnyelvűfű.png",
            alt: "Houndstongue",
            info1: "/Houndstongue.jpg",
        },
        {
            src: "/Avarvirág.png",
            alt: "Jade Orchid",
            info1: "/Jade Orchid.jpg",
        },
        {
            src: "/Foltos gólyaorr.png",
            alt: "Pottes cranesbill",
            info1: "/Pottes cranesbill.jpg",
        },
        {
            src: "/Lándzsás utifű.png",
            alt: "Narrowleaf plantain",
            info1: "/Narrowleaf plantain.jpg",
        },
        {
            src: "/Tarlóhere.png",
            alt: "Red clover",
            info1: "/Red clover.jpg",
        },
        {
            src: "/Csillag ördögszem.png",
            alt: "Starflower pincushions",
            info1: "/Starflower pincushions.jpg",
        },
        {
            src: "/Korpafű.png",
            alt: "Stiff slubmous",
            info1: "/Stiff slubmous.jpg",
        },
        {
            src: "/Bengáli bársonybab.png",
            alt: "Velvet bean",
            info1: "/Velvet bean.jpg",
        },
        {
            src: "/Kopasz gerlefej.png",
            alt: "White turtlehead",
            info1: "/White turtlehead.jpg",
        },
        {
            src: "/Viruló kutyatej.png",
            alt: "Wild spurge",
            info1: "/Wild spurge.jpg",
        },
    ];
</script>

<div class="home-container">
    <div class="content">
        <h1>ELEMENTS</h1>
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
        background: url("/background4.jpg") no-repeat center center fixed;
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