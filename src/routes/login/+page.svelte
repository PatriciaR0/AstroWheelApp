<script lang="ts">
  import { goto } from "$app/navigation";
  import { sessionStore } from "$lib/stores/sessionStore";

  let email = "";
  let password = "";


  function validate() {
    let error = false;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      error = true;
    } else {
      error = false;
    }
    return error;
  }

  async function handleSignIn() {
  
  let isError = validate()
  if (isError){
    alert ("E-mail is not valid!")
    return
  }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      sessionStore.setToken(data.token);
      goto("/home");
    } else {
      alert("Unsuccessful Login!");
    }
  }
</script>

<div class="login-container">
  <h2>Login</h2>
  <input
    class="input-field"
    type="text"
    placeholder="Email"
    bind:value={email}
  />
  <input
    class="input-field"
    type="password"
    placeholder="Password"
    bind:value={password}
  />
  <button class="login-btn" on:click={handleSignIn}>Sign In</button>
</div>

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
