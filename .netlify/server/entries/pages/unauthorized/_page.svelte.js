import { c as create_ssr_component } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-md mx-auto mt-20 p-6 bg-white rounded-lg shadow-md" data-svelte-h="svelte-c49n8x"><h1 class="text-2xl font-bold text-red-600 mb-4">Access Denied</h1> <p class="text-gray-600">You need a valid access token to view this site. Please check your URL and try again.</p></div>`;
});
export {
  Page as default
};
