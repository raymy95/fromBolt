<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  
  let username = '';
  let error = '';
  
  async function handleLogin() {
    if (!username.trim()) {
      error = 'Username is required';
      return;
    }
    
    const token = $page.url.searchParams.get('token');
    // Store both username and token in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    goto(`/collection?token=${token}`);
  }
  
  onMount(() => {
    const storedUsername = localStorage.getItem('username');
    const token = $page.url.searchParams.get('token');
    if (storedUsername) {
      goto(`/collection?token=${token}`);
    }
  });
</script>

<div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
  <h1 class="text-2xl font-bold mb-6 text-center">Welcome to Card Collection</h1>
  
  <form on:submit|preventDefault={handleLogin} class="space-y-4">
    <div>
      <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
      <input
        type="text"
        id="username"
        bind:value={username}
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        placeholder="Enter your username"
      />
    </div>
    
    {#if error}
      <p class="text-red-500 text-sm">{error}</p>
    {/if}
    
    <button
      type="submit"
      class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Start Playing
    </button>
  </form>
</div>