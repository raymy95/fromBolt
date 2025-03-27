<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';
  
  let cards = [];
  let unlockedCards = new Set();
  let showPasswordModal = false;
  let selectedCard = null;
  let password = '';
  let error = '';
  
  onMount(async () => {
    const username = localStorage.getItem('username');
    if (!username) {
      const token = localStorage.getItem('token');
      goto(`/?token=${token}`);
      return;
    }
    
    // Fetch cards and user's unlocked cards
    const { data: cardsData } = await supabase.from('cards').select('*');
    const { data: userCards } = await supabase
      .from('user_cards')
      .select('card_id')
      .eq('username', username);
      
    cards = cardsData || [];
    unlockedCards = new Set(userCards?.map(uc => uc.card_id) || []);
  });
  
  async function tryUnlock() {
    if (!selectedCard) return;
    
    if (password === selectedCard.unlock_password) {
      const username = localStorage.getItem('username');
      
      await supabase.from('user_cards').insert({
        username,
        card_id: selectedCard.id
      });
      
      unlockedCards.add(selectedCard.id);
      unlockedCards = unlockedCards; // trigger reactivity
      showPasswordModal = false;
      password = '';
      error = '';
    } else {
      error = 'Incorrect password';
    }
  }
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  {#each cards as card}
    <div class="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={card.image_url}
        alt={card.name}
        class="w-full h-48 object-cover {!unlockedCards.has(card.id) ? 'filter blur-lg' : ''}"
      />
      <div class="p-4">
        <h3 class="text-lg font-semibold">{card.name}</h3>
        {#if unlockedCards.has(card.id)}
          <p class="text-gray-600">{card.description}</p>
        {:else}
          <button
            on:click={() => {
              selectedCard = card;
              showPasswordModal = true;
            }}
            class="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Unlock Card
          </button>
        {/if}
      </div>
    </div>
  {/each}
</div>

{#if showPasswordModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-6 rounded-lg max-w-md w-full">
      <h3 class="text-xl font-bold mb-4">Unlock Card</h3>
      <input
        type="password"
        bind:value={password}
        placeholder="Enter password"
        class="w-full p-2 border rounded mb-4"
      />
      {#if error}
        <p class="text-red-500 text-sm mb-4">{error}</p>
      {/if}
      <div class="flex justify-end space-x-4">
        <button
          on:click={() => {
            showPasswordModal = false;
            password = '';
            error = '';
          }}
          class="px-4 py-2 text-gray-600 hover:text-gray-800"
        >
          Cancel
        </button>
        <button
          on:click={tryUnlock}
          class="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Unlock
        </button>
      </div>
    </div>
  </div>
{/if}