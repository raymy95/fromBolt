import { c as create_ssr_component, e as escape, f as each, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "../../../chunks/supabaseClient.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let unlockedCards = [];
  return `<div class="max-w-4xl mx-auto"><div class="bg-white rounded-lg shadow-md p-8 mb-8"><h1 class="text-2xl font-bold mb-4" data-svelte-h="svelte-1p45uk1">Profile</h1> <p class="text-lg text-gray-700">Username: ${escape(username)}</p> <p class="text-gray-600">Cards Unlocked: ${escape(unlockedCards.length)}</p></div> ${unlockedCards.length > 0 ? `<h2 class="text-xl font-semibold mb-4" data-svelte-h="svelte-oetift">Your Collection</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(unlockedCards, ({ cards }) => {
    return `<div class="bg-white rounded-lg shadow-md overflow-hidden"><img${add_attribute("src", cards.image_url, 0)}${add_attribute("alt", cards.name, 0)} class="w-full h-48 object-cover"> <div class="p-4"><h3 class="text-lg font-semibold">${escape(cards.name)}</h3> <p class="text-gray-600">${escape(cards.description)}</p></div> </div>`;
  })}</div>` : `<p class="text-center text-gray-600" data-svelte-h="svelte-1u2opq">You haven&#39;t unlocked any cards yet.</p>`}</div>`;
});
export {
  Page as default
};
