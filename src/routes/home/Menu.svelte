<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    /**
     * @type {HTMLAudioElement}
     */
    let audio;

    export let userData;

    let isMusicOn = true;
    onMount(() => {
        audio = new Audio('/sounds/backgroundmusic.mp3');
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

    import { goto } from '$app/navigation';

    function goToInventory() {
        goto('/home/inventory');
    }

    function goToCharacters() {
        goto('/home/characters');
    }

    function goToIslands() {
        goto('/home/islands');
    }

</script>


<style>
    /* Bal oldali sáv */
    .sidebar {
       display: flex;
       z-index: 10;
       position: fixed; /* Fixált pozíció */
       left: 0; /* Bal oldalon */
       top: 0; /* Felső élhez igazodva */
       width: 300px;
       height: 100vh; /* Teljes magasság */
       background-color: white; /* Háttérszín */
       color: black; /* Szövegszín */
       padding: 1px; /* Párnázás */
       flex-direction: column; /* Oszlopokba rendezés */
       align-items: center; /* Középre igazítás */
       justify-content: space-between; /* Tartalom elosztása */
       box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5); /* Árnyék */
    }
    .sidebar img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
    
    .music-toggle {
        margin-top: auto;
        padding: 10px;
        cursor: pointer;
        background: darkgray;
        border-radius: 5px;
        text-align: center;
        width: 80%;
        font-size: 16px;
    }

    .music-toggle:hover {
        background: lightgray;
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
    }

</style>

<div class="sidebar">
    <div>
        <img src="/logo.png" alt="AstroWheel Logo">
        <h2>{userData.username}</h2>
        <p>ID: {userData.id}</p>
        <p>Last Island: {userData.lastIsland}</p>
        <p>Points: {userData.points}</p>
        <p>First login: {userData.firstLogin}</p>

        <button on:click={goToInventory}>Inventory</button>
        
        <button on:click={goToCharacters}>Characters</button>
        
        <button on:click={goToIslands}>Islands</button>

    </div>

    <!-- Music ON/OFF Gomb -->
    <button class="music-toggle" on:click={toggleMusic}>
        {isMusicOn ? 'Music ON 🎵' : 'Music OFF 🔇'}
    </button>
    <!-- Lábléc -->
    <div class="footer">
        Made by: Witches Brew Games 2025
    </div>
</div>


