

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/home/reports/assetStatus/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.DTgelj0c.js","_app/immutable/chunks/scheduler.D9a1m4Jg.js","_app/immutable/chunks/index.BuLmxrIS.js","_app/immutable/chunks/entry.B4YP9iaR.js"];
export const stylesheets = [];
export const fonts = [];
