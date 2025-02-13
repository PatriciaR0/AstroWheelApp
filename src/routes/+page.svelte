<script>
    let email = "";
    let password = "";
</script>

<style>
    .login-container {
        background: rgba(0, 0, 0, 0.6);
        padding: 20px;
        border-radius: 20px;
        text-align: center;
        align-items: center;
        width: 320px;
    }

    .login-container h2 {
        margin-bottom: 15px;
        color: white;
    }

    .input-field {
        width: 94%;
        padding: 10px;
        margin: 5px 0;
        border: none;
        border-radius: 8px;
    }

    .forgot-password {
        display: block;
        margin-top: 10px;
        color: #bbb;
        font-size: 14px;
        cursor: pointer;
    }

    .forgot-password:hover {
        color: white;
    }

    .login-btn {
        width: 100%;
        padding: 10px;
        background-color: #ff6600;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        margin-top: 10px;
    }

    .login-btn:hover {
        background-color: #ff4500;
    }
</style>

<div class="login-container">
    <h2>Login</h2>
    <input class="input-field" type="text" placeholder="Email or ID" bind:value={email} />
    <input class="input-field" type="password" placeholder="Password" bind:value={password} />
    <button class="login-btn">Sign In</button>
    <span class="forgot-password">Forgotten password?</span>
</div>
