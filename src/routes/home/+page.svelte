<script>
    import Menu from './Menu.svelte';

    let userData = {
        id: "123456",
        username: "PlayerOne",
        lastIsland: "Orion Island",
        points: 250,
        firstLogin: "2025-03-08 10:30:00"
    };
</script>

<style>
    /* Alapbeállítások: teljes képernyős nézet, görgetés tiltása */
    html, body {
        width: 100%;
        height: 100%;
        overflow: hidden; /* Nincs görgetés */
        margin: 0;
        padding: 0;
        background: url('/background.png') no-repeat center center fixed;
        background-size: cover;
        font-family: Arial, sans-serif;
    }

    


    /* Jobb oldali tartalom */
    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #333; /* Sötétszürke szöveg */
        font-size: 24px;
        background: rgba(255, 255, 255, 0.85); /* Fehér, enyhén átlátszó háttér */
        padding: 20px;
        box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        margin: 20px;
    }

    .content h1 {
        font-size: 32px;
        font-weight: bold;
        color: black;
        margin-bottom: 10px;
    }

    .content p {
        font-size: 20px;
        margin: 5px 0;
    }
    </style>

<div class="home-container">
    <div class="content">
        <h1>Welcome, {userData.username}!</h1>
        <p>Last Island: {userData.lastIsland}</p>
        <p>Points: {userData.points}</p>
    </div>
</div>
