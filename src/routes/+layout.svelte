<script>
    import { onMount } from "svelte";
    let logoSrc = "/logo.png"; // A static mappában van
</script>

<svelte:head>
    <link rel="icon" type="image/png" href="/logo.png" />
</svelte:head>

<main>
    <img class="logo" src={logoSrc} alt="AstroWheel Logo" />
    <slot />
</main>

<footer class="footer">Made by: Witches Brew Games 2025</footer>

<style>
    main {
        height: 100%;
        margin: 0;
        padding: 0;
        background: url("/background.png") no-repeat center center fixed;
        background-size: cover;
        font-family: Arial, sans-serif;
        color: white;
        text-align: center;
    }

    .logo {
        width: 370px; 
        height: auto;
        margin-top: 80px;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: black;
        padding: 10px 0;
        color: white;
        text-align: center;
    }
</style>
