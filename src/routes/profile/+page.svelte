<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { supabase } from '$lib/supabaseClient';
  
  let username = '';
  let unlockedCards = [];
  
  onMount(async () => {
    username = localStorage.getItem('username') || '';
    if (!username) {
      const token = localStorage.getItem('token');
      goto(`/?token=${token}`);
      return;
    }
    
    const { data } = await supabase
      .from('user_cards')
      .select(`
        *,
        cards:card_id (
          name,
          description,
          image_url
        )
      `)
      .eq('username', username);
      
    unlockedCards = data || [];
  });
</script>

<div class="max-w-4xl mx-auto">
  <div class="bg-white rounded-lg shadow-md p-8 mb-8">
    <h1 class="text-2xl font-bold mb-4">Profile</h1>
    <p class="text-lg text-gray-700">Username: {username}</p>
    <p class="text-gray-600">Cards Unlocked: {unlockedCards.length}</p>
  </div>
  
  {#if unlockedCards.length > 0}
    <h2 class="text-xl font-semibold mb-4">Your Collection</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each unlockedCards as { cards }}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src={cards.image_url}
            alt={cards.name}
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{cards.name}</h3>
            <p class="text-gray-600">{cards.description}</p>
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p class="text-center text-gray-600">You haven't unlocked any cards yet.</p>
  {/if}
</div>