---
prev:
  text: '🛠️ csms_crafting'
  link: '/crafting/'
next:
  text: 'Configuration'
  link: '/crafting/config/general'
---
# Dependencies & Installation

## Dependencies
- **Framework** — ESX / QBCore / QBox / Ox
- **Inventory** — ESX / qb-inventory / ox_inventory
- [ox_lib](https://github.com/overextended/ox_lib)
- [ox_target](https://github.com/overextended/ox_target) (optional)
:::details ✅ Tested Versions
This script has been verified to work with the following framework versions:
- ESX **1.13.4**
- QBCore **1.3.0**
- QBox **1.23.0**
- Ox Core **1.5.1**

Other versions may work but are not officially tested.
:::

## Installation
### 1. **Add to Resources** 
Place the folder into your server's `resources` directory and rename it as `csms_crafting`.
### 2. **Configure** 
Edit the files in the `data` folder to match your server's needs. Refer to the [Configuration](./config/general.md) tab for guidance.
### 3. **Start** 
Add `ensure csms_crafting` to your `server.cfg`.