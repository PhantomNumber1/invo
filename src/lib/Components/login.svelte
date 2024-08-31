<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';

    let username = '';
    let password = '';
    let message = writable('');
    let apiBaseUrl = ""; 

    const loadApiUrl = async () => {
    try {
      const response = await fetch('../../routes/ngrok.txt');
      const url = await response.text();
      apiBaseUrl = url.trim(); // Store the base URL from the file
    } catch (error) {
      console.error("Failed to load API URL from file:", error);
    }
  };

    const register = async () => {
        loadApiUrl();
        const response = await fetch('${apiBaseUrl}/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        message.set(data.message);
    };

    const login = async () => {
        const response = await fetch('${apiBaseUrl}/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        message.set(data.message);
    };
</script>

<style>
    form {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: auto;
    }
    input, button {
        margin: 5px 0;
    }
</style>

<form on:submit|preventDefault={login}>
    <input type="text" placeholder="Username" bind:value={username} required />
    <input type="password" placeholder="Password" bind:value={password} required />
    <button type="button" on:click={register}>Register</button>
    <button type="submit">Login</button>
</form>

<p>{$message}</p>
