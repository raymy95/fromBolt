import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import "../../chunks/client.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  username = null;
  return `<div class="min-h-screen bg-gray-100"><header class="bg-white shadow"><nav class="container mx-auto px-6 py-4"><div class="flex justify-between items-center"><a href="${"/?token=" + escape(data.token, true)}" class="text-xl font-bold text-gray-800">Card Collection Game</a> ${username ? `<div class="flex items-center space-x-4"><a href="${"/collection?token=" + escape(data.token, true)}" class="text-gray-600 hover:text-gray-800">My Collection</a> <a href="${"/profile?token=" + escape(data.token, true)}" class="text-gray-600 hover:text-gray-800">Profile</a> <button class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500" data-svelte-h="svelte-1ckisz1">Logout</button></div>` : ``}</div></nav></header> <main class="container mx-auto px-6 py-8">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
