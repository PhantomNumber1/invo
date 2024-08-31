

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.9C0owP6-.js","_app/immutable/chunks/scheduler.D9a1m4Jg.js","_app/immutable/chunks/index.BuLmxrIS.js"];
export const stylesheets = ["_app/immutable/assets/8.Cha0JVUp.css"];
export const fonts = [];
