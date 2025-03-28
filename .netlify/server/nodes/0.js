import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CV6DPoMd.js","_app/immutable/chunks/B8QFiqg4.js","_app/immutable/chunks/DyjBc6Js.js","_app/immutable/chunks/DI51QYyl.js"];
export const stylesheets = ["_app/immutable/assets/0.B5gecY2T.css"];
export const fonts = [];
