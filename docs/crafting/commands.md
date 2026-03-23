---
prev:
  text: 'Exports'
  link: '/crafting/exports/server'
next:
  text: '💿 csms_log'
  link: '/log/'
---

# Admin Commands
This page documents the commands available.

## `/addCraftExp`
[admin only] Adds exp to a player in the built-in level system.

Arguments:
- target <Badge text="number" /> <span style="color:gray; font-size:15px"> — Server ID of the player</span>
- exp <Badge text="number" /> <span style="color:gray; font-size:15px"> — Amount of Exp to give</span>

## `/setCraftLv`
[admin only] Sets the crafting level of a player in the built-in level system. Exp will be automatically set to 0. 

Arguments:
- target <Badge text="number" /> <span style="color:gray; font-size:15px"> — Server ID of the player</span>
- level <Badge text="number" /> <span style="color:gray; font-size:15px"> — Level to set</span>

## `/getCraftLv`
Gets the crafting level and Exp of the player in the built-in level system.