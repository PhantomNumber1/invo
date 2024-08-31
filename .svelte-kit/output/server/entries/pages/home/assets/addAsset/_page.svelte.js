import { c as create_ssr_component, b as add_attribute } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
const css = {
  code: '.buttons.svelte-1vtxzlk.svelte-1vtxzlk{display:flex}.addButton.svelte-1vtxzlk.svelte-1vtxzlk{margin-left:260px}.backButton.svelte-1vtxzlk.svelte-1vtxzlk{margin-left:10px}main.svelte-1vtxzlk.svelte-1vtxzlk{flex-direction:row;background-image:url("../../../../lib/assets/images/addbg.jpg");background-size:cover;background-position:center;position:absolute;left:0;top:0;width:100%;height:100%;z-index:1}.leftside.svelte-1vtxzlk p.svelte-1vtxzlk{margin-bottom:10px}.leftside.svelte-1vtxzlk.svelte-1vtxzlk{margin-left:2em;width:30%;height:80%;color:white;font-size:75px}.leftside.svelte-1vtxzlk input.svelte-1vtxzlk{height:40px;width:80%;border-radius:10px}.inputHolder.svelte-1vtxzlk.svelte-1vtxzlk{height:50px;margin:4px;padding:2px}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n    import {base} from \\"$app/paths\\";\\r\\n    import {goto} from \\"$app/navigation\\";\\r\\n    let assetId = \\"\\";\\r\\n    let assetName = \\"\\";\\r\\n    let assetLocation = \\"\\";\\r\\n    let maintainancePeriod = \\"\\";\\r\\n    let description = \\"\\";\\r\\n    let message=\\"\\";\\r\\n    async function add(){\\r\\n        const response = await fetch('http://localhost:5000/api/add_asset', {\\r\\n            method: 'POST',\\r\\n            headers: {\\r\\n                'Content-Type': 'application/json'\\r\\n            },\\r\\n            body: JSON.stringify({ assetId, assetName, assetLocation, maintainancePeriod, description})\\r\\n        });\\r\\n        const data = await response.json();\\r\\n        if (response.ok) {\\r\\n                message = 'User registered successfully!';\\r\\n                goto(base+\\"/home\\");\\r\\n            } else {\\r\\n                message = data.error || 'Registration failed';\\r\\n                alert(message);\\r\\n            }\\r\\n    }\\r\\n    function back(){\\r\\n        goto(base+\\"/home\\")\\r\\n    }\\r\\n<\/script>\\r\\n<main>\\r\\n    <div class=\\"leftside\\">\\r\\n        <p>Add Inventory</p>\\r\\n        <div class = \\"inputHolder\\"><input type=\\"number\\" id=\\"assetId\\" bind:value={assetId} placeholder=\\"Asset ID\\"/></div>\\r\\n        <div class = \\"inputHolder\\"><input type=\\"text\\" id=\\"assetName\\" bind:value={assetName} placeholder=\\"Asset Name\\"/></div>\\r\\n        <div class = \\"inputHolder\\"><input type=\\"text\\" id=\\"Locatioin\\" bind:value={assetLocation} placeholder=\\"Branch Location\\"/></div>\\r\\n        <div class = \\"inputHolder\\"><input type=\\"number\\" id=\\"mintainance\\" bind:value={maintainancePeriod} placeholder=\\"Maintainance Period (in days)\\"/></div>\\r\\n        <div class = \\"inputHolder\\"><input type=\\"text\\" id=\\"description\\" bind:value={description} placeholder=\\"Description\\"/></div>\\r\\n        <div class=\\"buttons\\">\\r\\n            <div class = \\"backButton\\"><button on:click={back}>Back</button></div>\\r\\n            <div class = \\"addButton\\"><button on:click={add}>Add</button></div>\\r\\n        </div>\\r\\n    </div>\\r\\n</main>\\r\\n\\r\\n<style>\\r\\n    .buttons{\\r\\n        display: flex;\\r\\n    }\\r\\n    .addButton{\\r\\n        margin-left: 260px;\\r\\n    }\\r\\n    .backButton{\\r\\n        margin-left: 10px;\\r\\n    }\\r\\n    main{\\r\\n        flex-direction: row;\\r\\n        background-image: url(\\"../../../../lib/assets/images/addbg.jpg\\");\\r\\n        background-size: cover;\\r\\n        background-position: center;\\r\\n        position: absolute;\\r\\n        left: 0;\\r\\n        top: 0;\\r\\n        width: 100%;\\r\\n        height: 100%;\\r\\n        z-index: 1; /* Ensure content below navbar */\\r\\n    }\\r\\n    .leftside p{\\r\\n        margin-bottom: 10px;\\r\\n    }\\r\\n    .leftside{\\r\\n        margin-left: 2em;\\r\\n        width: 30%;\\r\\n        height: 80%;\\r\\n        /* background-color: white; */\\r\\n        color: white;\\r\\n        font-size: 75px;\\r\\n    }\\r\\n    .leftside input{\\r\\n        height: 40px;\\r\\n        width: 80%;\\r\\n        border-radius: 10px;\\r\\n    }\\r\\n    .inputHolder,.assetlocation{\\r\\n        height: 50px;\\r\\n        margin: 4px;\\r\\n        padding: 2px;\\r\\n    }\\r\\n    .assetlocation input{\\r\\n        width: 37%;\\r\\n        height: 40px;\\r\\n        border-radius: 10px;\\r\\n    }\\r\\n    .description{\\r\\n        height: 50px;\\r\\n        margin: 4px;\\r\\n        margin-top: 10px;\\r\\n        padding: 2px;\\r\\n    }\\r\\n    .description input{\\r\\n        height: 60px;\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AA8CI,sCAAQ,CACJ,OAAO,CAAE,IACb,CACA,wCAAU,CACN,WAAW,CAAE,KACjB,CACA,yCAAW,CACP,WAAW,CAAE,IACjB,CACA,kCAAI,CACA,cAAc,CAAE,GAAG,CACnB,gBAAgB,CAAE,8CAA8C,CAChE,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CACb,CACA,wBAAS,CAAC,gBAAC,CACP,aAAa,CAAE,IACnB,CACA,uCAAS,CACL,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,GAAG,CAEX,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IACf,CACA,wBAAS,CAAC,oBAAK,CACX,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,GAAG,CACV,aAAa,CAAE,IACnB,CACA,0CAA2B,CACvB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,GAAG,CACX,OAAO,CAAE,GACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let assetId = "";
  let assetName = "";
  let assetLocation = "";
  let maintainancePeriod = "";
  let description = "";
  $$result.css.add(css);
  return `<main class="svelte-1vtxzlk"><div class="leftside svelte-1vtxzlk"><p class="svelte-1vtxzlk" data-svelte-h="svelte-6rup2n">Add Inventory</p> <div class="inputHolder svelte-1vtxzlk"><input type="number" id="assetId" placeholder="Asset ID" class="svelte-1vtxzlk"${add_attribute("value", assetId, 0)}></div> <div class="inputHolder svelte-1vtxzlk"><input type="text" id="assetName" placeholder="Asset Name" class="svelte-1vtxzlk"${add_attribute("value", assetName, 0)}></div> <div class="inputHolder svelte-1vtxzlk"><input type="text" id="Locatioin" placeholder="Branch Location" class="svelte-1vtxzlk"${add_attribute("value", assetLocation, 0)}></div> <div class="inputHolder svelte-1vtxzlk"><input type="number" id="mintainance" placeholder="Maintainance Period (in days)" class="svelte-1vtxzlk"${add_attribute("value", maintainancePeriod, 0)}></div> <div class="inputHolder svelte-1vtxzlk"><input type="text" id="description" placeholder="Description" class="svelte-1vtxzlk"${add_attribute("value", description, 0)}></div> <div class="buttons svelte-1vtxzlk"><div class="backButton svelte-1vtxzlk"><button data-svelte-h="svelte-5plzg4">Back</button></div> <div class="addButton svelte-1vtxzlk"><button data-svelte-h="svelte-vl3uo0">Add</button></div></div></div> </main>`;
});
export {
  Page as default
};
