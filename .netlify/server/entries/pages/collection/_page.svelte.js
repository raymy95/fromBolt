import { c as create_ssr_component, f as each, d as add_attribute, e as escape } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import "../../../chunks/supabaseClient.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [];
  let unlockedCards = /* @__PURE__ */ new Set();
  return `<div class="grid grid-cols-1 md:grid-cols-3 gap-6">${each(cards, (card) => {
    return `<div class="relative bg-white rounded-lg shadow-md overflow-hidden"><img${add_attribute("src", card.image_url, 0)}${add_attribute("alt", card.name, 0)} class="${"w-full h-48 object-cover " + escape(!unlockedCards.has(card.id) ? "filter blur-lg" : "", true)}"> <div class="p-4"><h3 class="text-lg font-semibold">${escape(card.name)}</h3> ${unlockedCards.has(card.id) ? `<p class="text-gray-600">${escape(card.description)}</p>` : `<button class="mt-2 w-full py-2 px-4 bg-indigo-600 text-white rounded hover:bg-indigo-700" data-svelte-h="svelte-d58w64">Unlock Card
          </button>`}</div> </div>`;
  })}</div> ${``}`;
});
export {
  Page as default
};
