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
        <div>
            <img
                class="profile-image"
                src={"/npc " + userData.characterName + ".webp"}
                alt="User Selected Image"
            />
        </div>
        <div class="sidebar-text">
            <h2>WELCOME BACK!</h2>
            <h2>{userData.playerName}</h2>

            <p>Character ID: {userData.characterId}</p>
            <p>Last Island: {userData.islandName}</p>
            <p>Total Score: {userData.totalScore}</p>
            <p>Last login: {userData.lastLogin}</p>
        </div>

        <button on:click={goToInventory}>Materials</button>

        <button on:click={goToCharacters}>Characters</button>

        <button on:click={goToIslands}>Islands</button>

        <button on:click={goToHighscores}>Highscores</button>

        <img
            class="logo"
            src="/logo.webp"
            alt="AstroWheel Logo"
            style="width: 120px; height: auto; margin: auto;"
        />
    </div>
    <div class="settings-button-container">
        <button
            on:click={goToHome}
            aria-label="home-icon"
            class="settings-button"
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
        <button class="music-toggle" on:click={toggleMusic}>
            {isMusicOn ? "Music ON 🎵" : "Music OFF 🔇"}
        </button>
        <button
            on:click={logoutAndRedirectToLogin}
            aria-label="log-out-icon"
            class="settings-button"
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
    </div>
    <!-- Lábléc -->
    <div class="footer">Made by: Witches Brew Games 2025</div>
</div>

<style>
    .profile-image {
        padding: 20px;
        width: 155px;
        height: 155px;
        border-radius: 50%;
    }
    .settings-button-container {
        display: flex;
    }
    .sidebar-text h2 {
        margin: 5px;
    }
    .sidebar-text p {
        margin: 10px;
    }
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
        background: url("/background.webp") no-repeat center center fixed;
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
    .settings-button {
        all: unset;
        cursor: pointer;
        background: transparent;
        border: none;
        padding: 0;
        margin-top: auto;
        margin-bottom: 20%;
    }

    .settings-button svg {
        display: block;
    }

    .settings-button:hover {
        background: transparent;
    }

    .settings-button:hover svg {
        stroke: #b4853f;
    }

    .settings-button:focus {
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
        margin-left: 35px;
        margin-right: 35px;
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
    @media (max-height: 800px) {
        .profile-image {
            padding-top: 20px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        button {
            width: 40%;
        }
    }
    @media (max-height: 630px) {
        .logo {
            display: none;
        }
    }
    @media (max-height: 500px) {
        .sidebar-text p {
            display: none;
        }
    }
    @media (min-height: 800px) {
        .sidebar-text {
            margin-bottom: 20px;
        }
    }
</style>
