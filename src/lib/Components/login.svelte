<script>
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import { apiBaseUrl } from '$lib/assets/config';

    let username = '';
    let password = '';
    let message = writable('');
    let apiBaseUrl = 'https://665b-122-172-81-83.ngrok-free.app'; 

    const register = async () => {
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
