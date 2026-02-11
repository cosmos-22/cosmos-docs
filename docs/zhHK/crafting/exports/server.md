---
prev:
  text: 'Configuration'
  link: '/crafting/config/general'
next:
  text: 'Commands'
  link: '/crafting/commands'
---

# Server exports
This page documents all available exports on server side.

## AddExp
Adds exp to a player in the built-in level system.
```lua
exports.csms_crafting:AddExp(source, exp)
```
- source <Badge text="number" /> <span style="color:gray; font-size:15px"> — Server ID of the player</span>
- exp <Badge text="number" /> <span style="color:gray; font-size:15px"> — Amount of Exp to give</span>