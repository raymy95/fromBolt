import { c as create_ssr_component, b as subscribe, d as add_attribute } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { p as page } from "../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let username = "";
  $$unsubscribe_page();
  return `<div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-8"><h1 class="text-2xl font-bold mb-6 text-center" data-svelte-h="svelte-1y4p7ou">Welcome to Card Collection</h1> <form class="space-y-4"><div><label for="username" class="block text-sm font-medium text-gray-700" data-svelte-h="svelte-jjkzfs">Username</label> <input type="text" id="username" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Enter your username"${add_attribute("value", username, 0)}></div> ${``} <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" data-svelte-h="svelte-6nb91r">Start Playing</button></form></div>`;
});
export {
  Page as default
};
