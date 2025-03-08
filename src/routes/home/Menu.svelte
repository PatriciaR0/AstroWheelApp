<script>
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    /**
     * @type {HTMLAudioElement}
     */
    let audio;

    export let userData;

    let isMusicOn = true;
    onMount(() => {
        audio = new Audio("/sounds/backgroundmusic.mp3");
        audio.loop = true;
    });

    function toggleMusic() {
        if (isMusicOn) {
            audio.pause();
        } else {
            audio.play();
        }
        isMusicOn = !isMusicOn;
    }

    import { goto } from "$app/navigation";

    function goToInventory() {
        goto("/home/inventory");
    }

    function goToCharacters() {
        goto("/home/characters");
    }

    function goToIslands() {
        goto("/home/islands");
    }

    function goToElements() {
        goto("/home/elements");
    }

    function goToHighscores() {
        goto("/home/highscores");
    }
</script>

<div class="sidebar">
    <div>
        <img src="/logo.png" alt="AstroWheel Logo" />
        <h2>{userData.username}</h2>
        <img src="{userData.userImage}" alt="User Selected Image" style="width: 200px; height: auto; margin: 10px auto;"/>
        <p>ID: {userData.id}</p>
        <p>Last Island: {userData.lastIsland}</p>
        <p>Actual points: {userData.points}</p>
        <p>First login: {userData.firstLogin}</p>
        <p>Last login: {userData.lastLogin}</p>

        <button on:click={goToInventory}>My Inventory</button>

        <button on:click={goToCharacters}>Characters</button>

        <button on:click={goToIslands}>Islands</button>

        <button on:click={goToIslands}>Elements</button>

        <button on:click={goToIslands}>Highscores</button>
    </div>

    <!-- Music ON/OFF Gomb -->
    <button class="music-toggle" on:click={toggleMusic}>
        {isMusicOn ? "Music ON 🎵" : "Music OFF 🔇"}
    </button>
    <!-- Lábléc -->
    <div class="footer">Made by: Witches Brew Games 2025</div>
</div>

<style>
    button {
        margin-top: auto;
        margin-bottom: 10px;
        padding: 10px;
        cursor: pointer;
        border-radius: 5px;
        text-align: center;
        width: 80%;
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        background: url("/background.png") no-repeat center center fixed;
        color: black; /* Szövegszín */
    }
    Button:hover {
        background: rgb(182, 148, 76);
        color: white;
    }

    /* Bal oldali sáv */
    .sidebar {
        font-weight: bold;
        display: flex;
        z-index: 10;
        position: fixed; /* Fixált pozíció */
        left: 0; /* Bal oldalon */
        top: 0; /* Felső élhez igazodva */
        width: 300px;
        height: 100vh; /* Teljes magasság */
        background-color: rgba(255, 255, 255, 0.6); /* Háttérszín */
        color: black; /* Szövegszín */
        padding: 1px; /* Párnázás */
        flex-direction: column; /* Oszlopokba rendezés */
        align-items: center; /* Középre igazítás */
        justify-content: space-between; /* Tartalom elosztása */
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5); /* Árnyék */
    }
    .sidebar img {
        padding: 20px;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .music-toggle {
        margin-top: auto;
        padding: 10px;
        cursor: pointer;
        background: url("/background.png") no-repeat center center fixed;
        color: black; /* Szövegszín */
        border-radius: 5px;
        text-align: center;
        width: 80%;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20%;
    }

    .music-toggle:hover {
        background: rgb(25, 9, 39);
        color: white;
    }

    .footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 282px;
        background: #333;
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 14px;
        margin-bottom: 5%;
    }
</style>
