import { c as create_ssr_component, v as validate_component, b as add_attribute, d as each, e as escape } from "../../../chunks/ssr.js";
import { b as base } from "../../../chunks/paths.js";
import { w as writable } from "../../../chunks/index2.js";
import "../../../chunks/client.js";
import "../../../chunks/index.js";
const isAuthenticated = writable(false);
const logo = "/_app/immutable/assets/logo.Bcaj2VQw.jpg";
const Authenticator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { redirectTo = "/" } = $$props;
  let auth = false;
  isAuthenticated.subscribe((value) => auth = value);
  if ($$props.redirectTo === void 0 && $$bindings.redirectTo && redirectTo !== void 0) $$bindings.redirectTo(redirectTo);
  return `  ${auth ? `${slots.default ? slots.default({}) : ``} ` : ``}`;
});
const css = {
  code: `.bottomcontent.svelte-18zbiu8.svelte-18zbiu8{align-self:flex-end}.background-image.svelte-18zbiu8.svelte-18zbiu8{background-image:url('../../lib/assets/images/homebg.jpg');background-size:cover;background-position:center;position:absolute;top:10em;left:0;width:100%;height:calc(100vh - 10em);z-index:1}main.svelte-18zbiu8.svelte-18zbiu8{height:100%;width:100%}.navbar.svelte-18zbiu8.svelte-18zbiu8{display:flex;justify-content:space-between;align-items:center;background-color:white;position:fixed;top:0;left:0;width:100%;height:10em;padding:0 2rem;z-index:999}.navbar.svelte-18zbiu8 .menu.svelte-18zbiu8{margin-bottom:28px;margin-right:250px;display:flex;align-items:center}.navbar.svelte-18zbiu8 .menu a.svelte-18zbiu8,.dropdown-content.svelte-18zbiu8 a.svelte-18zbiu8{color:black;text-decoration:none;font-size:20px;padding:0.5rem 1rem;position:relative}.navbar.svelte-18zbiu8 .menu a.svelte-18zbiu8::after{content:"";position:absolute;left:50%;bottom:0;width:0;height:2px;background-image:linear-gradient(to right, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);transition:width 0.3s ease-in-out, left 0.3s ease-in-out;transform:translateX(13%)}.navbar.svelte-18zbiu8 .menu a.svelte-18zbiu8:hover::after{width:calc(100% - 2rem);left:0}.dropdown.svelte-18zbiu8.svelte-18zbiu8{position:relative;z-index:1000}.dropdown-content.svelte-18zbiu8.svelte-18zbiu8{display:none;position:absolute;top:100%;left:0;background-color:#fff;box-shadow:0px 8px 16px rgba(0, 0, 0, 0.2);z-index:1001;transition:opacity 0.7s ease, transform 0.7s ease;opacity:0;transform:translateY(-10px)}.dropdown.svelte-18zbiu8:hover .dropdown-content.svelte-18zbiu8{display:block;opacity:1;transform:translateY(0)}.dropdown-content.svelte-18zbiu8 a.svelte-18zbiu8{color:black;padding:12px 16px;text-decoration:none;display:block}.dropdown-content.svelte-18zbiu8 a.svelte-18zbiu8:hover{background-color:#ddd}.logo.svelte-18zbiu8.svelte-18zbiu8{margin-left:50px;width:200px;height:auto}`,
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import {base} from '$app/paths';\\r\\n    import logo from \\"../../lib/assets/images/logo.jpg\\";\\r\\n    import Authenticator from '../../lib/Components/authenticator.svelte';\\r\\n    import bg from \\"../../lib/assets/images/homebg.png\\";\\r\\n\\timport { text } from '@sveltejs/kit';\\r\\n    let navigationLinks = [\\r\\n        { id: 'assets', text: 'ASSETS', dropdownItems: [\\r\\n            { id: 'addAsset', text: \\"Add Asset\\"},\\r\\n            { id: 'addUnit', text: 'Add Unit' },\\r\\n            { id: 'viewInvo', text: 'View Inventory' },\\r\\n            { id: 'assetVendorInfo', text: 'Vendor Info' }\\r\\n        ] },\\r\\n        { id: 'spares', text: 'SPARE PARTS', dropdownItems: [\\r\\n            { id: 'addSpares', text: 'Add Spares' },\\r\\n            { id: 'sparesInvo', text: 'Spares Inventory' },\\r\\n            { id: 'spareVendorInfo', text: 'Vendor Info' }\\r\\n        ] },\\r\\n        { id: 'maintainance', text: 'MAINTAINANCE', dropdownItems: [\\r\\n            { id: 'schedule', text: 'Schedule Maintainence' }\\r\\n        ] },\\r\\n        { id: 'reports', text: 'REPORTS', dropdownItems: [\\r\\n            { id: 'assetMaster', text: 'Asset Master' },\\r\\n            { id: 'sparesMaster', text: 'Spares Master' },\\r\\n            { id: 'assetStatus', text: 'Asset Status' }\\r\\n        ] },\\r\\n        {\\r\\n            id: 'contact', text: \\"CONTACT\\"\\r\\n        }\\r\\n    ];\\r\\n<\/script>\\r\\n\\r\\n\\r\\n<Authenticator>\\r\\n<main>\\r\\n<header class=\\"navbar\\">\\r\\n    <img class=\\"logo bottomcontent\\" src={logo} alt=\\"Logo\\">\\r\\n    <nav class=\\"menu bottomcontent\\" >\\r\\n        {#each navigationLinks as link}\\r\\n            {#if link.dropdownItems}\\r\\n                <div class=\\"dropdown\\">\\r\\n                    <a href={\`\${base}\`}>{link.text}</a>\\r\\n                    <div class=\\"dropdown-content\\">\\r\\n                        {#each link.dropdownItems as item}\\r\\n                            <a href={\`\${base}/home/\${link.id}/\${item.id}\`}>{item.text}</a>\\r\\n                        {/each}\\r\\n                    </div>\\r\\n                </div>\\r\\n            {:else}\\r\\n            <a href={\`\${base}/home/\${link.id}\`}>{link.text}</a>\\r\\n            {/if}\\r\\n        {/each}\\r\\n    </nav>\\r\\n</header>\\r\\n<div class=\\"background-image\\">\\r\\n</div>\\r\\n</main>\\r\\n</Authenticator>\\r\\n\\r\\n<style>\\r\\n    .bottomcontent{\\r\\n        align-self: flex-end;\\r\\n    }\\r\\n    .background-image {\\r\\n        background-image: url('../../lib/assets/images/homebg.jpg'); /* Replace with your image path */\\r\\n        background-size: cover;\\r\\n        background-position: center;\\r\\n        position: absolute;\\r\\n        top: 10em; /* Adjust based on navbar height */\\r\\n        left: 0;\\r\\n        width: 100%;\\r\\n        height: calc(100vh - 10em); /* Calculate height to fill screen */\\r\\n        z-index: 1; /* Ensure content below navbar */\\r\\n    }\\r\\n    main{\\r\\n        height: 100%;\\r\\n        width: 100%;\\r\\n    }\\r\\n    .navbar {   \\r\\n        display: flex;\\r\\n        justify-content: space-between;\\r\\n        align-items: center;\\r\\n        background-color: white;\\r\\n        position: fixed;\\r\\n        top: 0;\\r\\n        left: 0;\\r\\n        width: 100%;\\r\\n        height: 10em;\\r\\n        padding: 0 2rem; /* Adjust padding as needed */\\r\\n        z-index: 999;\\r\\n    }\\r\\n\\r\\n    .navbar .menu {\\r\\n        margin-bottom: 28px;\\r\\n        margin-right: 250px;\\r\\n        display: flex;\\r\\n        align-items: center;\\r\\n    }\\r\\n\\r\\n    .navbar .menu a, .dropdown-content a {\\r\\n        color: black;\\r\\n        text-decoration: none;\\r\\n        font-size: 20px;\\r\\n        padding: 0.5rem 1rem; /* Adjust padding as needed */\\r\\n        position: relative;\\r\\n    }\\r\\n\\r\\n    .navbar .menu a::after {\\r\\n        content: \\"\\";\\r\\n        position: absolute;\\r\\n        left: 50%;\\r\\n        bottom: 0;\\r\\n        width: 0;\\r\\n        height: 2px;\\r\\n        background-image: linear-gradient(to right, #F79533 0%, #F37055 15%, #EF4E7B 30%, #A166AB 44%, #5073B8 58%, #1098AD 72%, #07B39B 86%, #6DBA82 100%);\\r\\n        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;\\r\\n        transform: translateX(13%);\\r\\n    }\\r\\n\\r\\n    .navbar .menu a:hover::after {\\r\\n        width: calc(100% - 2rem); /* Adjust width as needed */\\r\\n        left: 0;\\r\\n    }\\r\\n\\r\\n    .dropdown {\\r\\n        position: relative;\\r\\n        z-index: 1000;\\r\\n    }\\r\\n\\r\\n    .dropdown-content {\\r\\n        display: none;\\r\\n        position: absolute;\\r\\n        top: 100%;\\r\\n        left: 0;\\r\\n        background-color: #fff;\\r\\n        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);\\r\\n        z-index: 1001;\\r\\n        transition: opacity 0.7s ease, transform 0.7s ease;\\r\\n        opacity: 0;\\r\\n        transform: translateY(-10px);\\r\\n    }\\r\\n\\r\\n\\r\\n    .dropdown:hover .dropdown-content {\\r\\n        display: block;\\r\\n        opacity: 1;\\r\\n        transform: translateY(0);\\r\\n    }\\r\\n\\r\\n    .dropdown-content a {\\r\\n        color: black;\\r\\n        padding: 12px 16px;\\r\\n        text-decoration: none;\\r\\n        display: block;\\r\\n    }\\r\\n\\r\\n    .dropdown-content a:hover {\\r\\n        background-color: #ddd;\\r\\n    }\\r\\n\\r\\n    .logo {\\r\\n        margin-left: 50px;\\r\\n        width: 200px; /* Adjust logo size as needed */\\r\\n        height: auto;\\r\\n    }\\r\\n</style>\\r\\n\\r\\n"],"names":[],"mappings":"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"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let navigationLinks = [
    {
      id: "assets",
      text: "ASSETS",
      dropdownItems: [
        { id: "addAsset", text: "Add Asset" },
        { id: "addUnit", text: "Add Unit" },
        { id: "viewInvo", text: "View Inventory" },
        {
          id: "assetVendorInfo",
          text: "Vendor Info"
        }
      ]
    },
    {
      id: "spares",
      text: "SPARE PARTS",
      dropdownItems: [
        { id: "addSpares", text: "Add Spares" },
        {
          id: "sparesInvo",
          text: "Spares Inventory"
        },
        {
          id: "spareVendorInfo",
          text: "Vendor Info"
        }
      ]
    },
    {
      id: "maintainance",
      text: "MAINTAINANCE",
      dropdownItems: [
        {
          id: "schedule",
          text: "Schedule Maintainence"
        }
      ]
    },
    {
      id: "reports",
      text: "REPORTS",
      dropdownItems: [
        { id: "assetMaster", text: "Asset Master" },
        {
          id: "sparesMaster",
          text: "Spares Master"
        },
        { id: "assetStatus", text: "Asset Status" }
      ]
    },
    { id: "contact", text: "CONTACT" }
  ];
  $$result.css.add(css);
  return `${validate_component(Authenticator, "Authenticator").$$render($$result, {}, {}, {
    default: () => {
      return `<main class="svelte-18zbiu8"><header class="navbar svelte-18zbiu8"><img class="logo bottomcontent svelte-18zbiu8"${add_attribute("src", logo, 0)} alt="Logo"> <nav class="menu bottomcontent svelte-18zbiu8">${each(navigationLinks, (link) => {
        return `${link.dropdownItems ? `<div class="dropdown svelte-18zbiu8"><a${add_attribute("href", `${base}`, 0)} class="svelte-18zbiu8">${escape(link.text)}</a> <div class="dropdown-content svelte-18zbiu8">${each(link.dropdownItems, (item) => {
          return `<a${add_attribute("href", `${base}/home/${link.id}/${item.id}`, 0)} class="svelte-18zbiu8">${escape(item.text)}</a>`;
        })}</div> </div>` : `<a${add_attribute("href", `${base}/home/${link.id}`, 0)} class="svelte-18zbiu8">${escape(link.text)}</a>`}`;
      })}</nav></header> <div class="background-image svelte-18zbiu8" data-svelte-h="svelte-bc7ior"></div></main>`;
    }
  })}`;
});
export {
  Page as default
};
