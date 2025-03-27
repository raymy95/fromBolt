

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/unauthorized/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B9mMPp_t.js","_app/immutable/chunks/DyjBc6Js.js","_app/immutable/chunks/DI51QYyl.js"];
export const stylesheets = [];
export const fonts = [];
