<script>
    import { onMount } from "svelte";
    import CardContainer from "../CardContainer.svelte";

    let materials = [];

    onMount(async () => {
        const response = await fetch("http://localhost:3000/api/players/me", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });
        let meResponse = await response.json();
        materials = meResponse.materials;
    });

    let images = [
        {
            id: 1,
            src: "/Amethyst.webp",
            alt: "Amethyst",
            info1: "/amethyst_info.webp",
        },
        {
            src: "/Cross stone.webp",
            alt: "Cross stone",
            info1: "/cross_stone_info.webp",
        },
        {
            src: "/Heliotrop.webp",
            alt: "Heliotrop",
            info1: "/heliotrop_info.webp",
        },
        {
            src: "/Fire agate.webp",
            alt: "Fire agate",
            info1: "/Fire agate_info.webp",
        },
        {
            src: "/ElixirofSecondChances.webp",
            alt: "Elixir of Second Chances",
            info1: "/eosc_info.webp",
        },
        {
            id: 17,
            src: "/Hagymás boglárka.webp",
            alt: "Bulbous buttercup",
            info1: "/Bulbous buttercup.webp",
        },
        {
            id: 22,
            src: "/Krisztuskorona.webp",
            alt: "Calvary clover",
            info1: "/Calvary clover.webp",
        },
        {
            id: 18,
            src: "/Kanadai kapotnyak.webp",
            alt: "Canadian snakeroot",
            info1: "/Canadian snakeroot.webp",
        },
        {
            id: 24,
            src: "/Közönséges gyújtoványfű.webp",
            alt: "Common Toadflax",
            info1: "/Common Toadflax.webp",
        },
        {
            id: 20,
            src: "/Korallgyökér.webp",
            alt: "Coral-root",
            info1: "/Coral root.webp",
        },
        {
            id: 14,
            src: "/Betyárkóró.webp",
            alt: "Horseweed",
            info1: "/Horseweed.webp",
        },
        {
            id: 23,
            src: "/Közönséges ebnyelvűfű.webp",
            alt: "Houndstongue",
            info1: "/Houndstongue.webp",
        },
        {
            id: 12,
            src: "/Avarvirág.webp",
            alt: "Jade Orchid",
            info1: "/Jade Orchid.webp",
        },
        {
            id: 16,
            src: "/Foltos gólyaorr.webp",
            alt: "Spotted cranesbill",
            info1: "/Spotted cranesbill.webp",
        },
        {
            id: 25,
            src: "/Lándzsás utifű.webp",
            alt: "Narrowleaf plantain",
            info1: "/Narrowleaf plantain.webp",
        },
        {
            id: 26,
            src: "/Tarlóhere.webp",
            alt: "Red clover",
            info1: "/Red clover.webp",
        },
        {
            id: 15,
            src: "/Csillag ördögszem.webp",
            alt: "Starflower pincushions",
            info1: "/Starflower pincushions.webp",
        },
        {
            id: 21,
            src: "/Korpafű.webp",
            alt: "Stiff slubmous",
            info1: "/Stiff slubmous.webp",
        },
        {
            id: 13,
            src: "/Bengáli bársonybab.webp",
            alt: "Velvet bean",
            info1: "/Velvet bean.webp",
        },
        {
            id: 19,
            src: "/Kopasz gerlefej.webp",
            alt: "White turtlehead",
            info1: "/White turtlehead.webp",
        },
        {
            id: 27,
            src: "/Viruló kutyatej.webp",
            alt: "Wild spurge",
            info1: "/Wild spurge.webp",
        },
    ];
</script>

<div class="home-container">
    <div class="content">
        <h1>MY INVENTORY</h1>
    </div>
</div>

<CardContainer bind:images bind:materials />

<style>
    .home-container {
        margin-left: 300px;
        display: flex;
    }

    .content {
        flex: 1;
        padding: 4px;
        background: url("/background2.jpg") no-repeat center center fixed;
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
