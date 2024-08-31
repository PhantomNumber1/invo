

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/assets/addUnit/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2bIan6A7.js","_app/immutable/chunks/scheduler.D9a1m4Jg.js","_app/immutable/chunks/index.BuLmxrIS.js","_app/immutable/chunks/entry.B4YP9iaR.js"];
export const stylesheets = ["_app/immutable/assets/5.UgN2e9J2.css"];
export const fonts = [];
