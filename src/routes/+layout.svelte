<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/environment';

  /** @type {import('./$types').LayoutData} */
  export let data;

  function handleLogout() {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    goto(`/?token=${data.token}`);
  }

  $: username = browser ? localStorage.getItem('username') : null;
</script>

<div class="min-h-screen bg-gray-100">
  <header class="bg-white shadow">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <a href="/?token={data.token}" class="text-xl font-bold text-gray-800">Card Collection Game</a>
        {#if username}
          <div class="flex items-center space-x-4">
            <a href="/collection?token={data.token}" class="text-gray-600 hover:text-gray-800">My Collection</a>
            <a href="/profile?token={data.token}" class="text-gray-600 hover:text-gray-800">Profile</a>
            <button 
              on:click={handleLogout}
              class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        {/if}
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-6 py-8">
    <slot />
  </main>
</div>