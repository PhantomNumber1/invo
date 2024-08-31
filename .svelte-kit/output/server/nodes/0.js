

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BriAeH7B.js","_app/immutable/chunks/scheduler.D9a1m4Jg.js","_app/immutable/chunks/index.BuLmxrIS.js"];
export const stylesheets = [];
export const fonts = [];
