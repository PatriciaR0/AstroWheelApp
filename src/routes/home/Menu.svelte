<script>
    import { onMount } from "svelte";

    let userData = {};

    onMount(async () => {
        const response = await fetch("http://localhost:3000/api/players/me", {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        });
        userData = await response.json();
    });

    /**
     * @type {HTMLAudioElement}
     */
    let audio;

    let isMusicOn = false;
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

    function goToHome() {
        goto("/home");
    }

    function logoutAndRedirectToLogin() {
        // Kijelentkezés logika
        localStorage.removeItem("token"); // Példa token törlésre

        // Irányítás a Login oldalra
        goto("/login");
    }
</script>

<div class="sidebar">
    <div>
        <img
            src={"/npc " + userData.characterName + ".png"}
            alt="User Selected Image"
            style="width: 170px; height: auto; margin: auto;"
        />
        <h2>WELCOME BACK!</h2>
        <h2>{userData.playerName}</h2>

        <p>Character ID: {userData.characterId}</p>
        <p>Last Island: {userData.islandName}</p>
        <p>Total Score: {userData.totalScore}</p>
        <p>Last login: {userData.lastLogin}</p>

        <button on:click={goToInventory}>My Inventory</button>

        <button on:click={goToCharacters}>Characters</button>

        <button on:click={goToIslands}>Islands</button>

        <button on:click={goToHighscores}>Highscores</button>

        <button
            on:click={goToHome}
            aria-label="home-icon"
            class="home-icon-button"
        >
            <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        </button>

        <button
            on:click={logoutAndRedirectToLogin}
            aria-label="log-out-icon"
            class="log-out-icon-button"
        >
            <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
        </button>
        <img
            src="/logo.png"
            alt="AstroWheel Logo"
            style="width: 120px; height: auto; margin: auto;"
        />
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
        color: black;
    }
    button:hover {
        background: rgb(182, 148, 76);
        color: white;
    }
    .sidebar {
        font-weight: bold;
        display: flex;
        z-index: 10;
        position: fixed;
        left: 0;
        top: 0;
        width: 300px;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.6);
        color: black;
        padding: 1px;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.5);
    }
    .sidebar img {
        padding: 20px;
        width: 170px;
        height: 170px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .home-icon-button {
        all: unset;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        position: fixed;
        top: 840px;
        left: 30px;
    }

    .home-icon-button svg {
        display: block;
    }

    .home-icon-button:hover {
        background: transparent;
    }

    .home-icon-button:hover svg {
        stroke: #b4853f;
    }

    .home-icon-button:focus {
        outline: none;
    }

    .log-out-icon-button {
        all: unset;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        position: fixed;
        top: 840px;
        left: 250px;
    }
    .log-out-icon-button:hover {
        background: transparent;
    }
    .log-out-icon-button:hover svg {
        stroke: #b4853f;
    }

    .log-out-icon-button:focus {
        outline: none;
    }

    .music-toggle {
        margin-top: auto;
        padding: 10px;
        cursor: pointer;
        all: unset;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        border-radius: 5px;
        text-align: center;
        width: 80%;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 20%;
    }

    .music-toggle:hover {
        color: rgb(255, 255, 255);
        background: transparent;
        text-shadow:
            -0.75px 0 black,
            0 0.75px black,
            0.75px 0 black,
            0 -0.75px black;
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
