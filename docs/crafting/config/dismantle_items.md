---
prev:
  text: 'Crafting Items'
  link: '/crafting/config/crafting_items'
next:
  text: 'Exports'
  link: '/crafting/exports/server'
---

# Dismantle Items

Dismantle items are defined in `/data/dismantle.lua`.

Items are defined with key, value pairs. Key serves as the ID of the recipe and will be used to refer by the code.

## Options

- **itemName** <Badge text="string" /> <span style="color:gray; font-size:15px"> — The item name of the item being dismantled</span>

- **label?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — Setting this option will override the original item label </span>

- **category** <Badge text="string" /> <span style="color:gray; font-size:15px"> — The label used to group the item in the NUI </span>

- **description?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — Description of the item shown in the NUI, will use the default description if not defined </span>

- **time** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Dismantling time in second </span>

- **level?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Level required to use this recipe, you must set enableLevel to `true` in `settings.lua` to use this option</span>

- **exp?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Exp given to the player when the dismantling is done, you must set enableLevel to `true` in `settings.lua` to use this option</span>

- **recipe** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Items given to the player after dismantling</span>
    - itemName <Badge text="string" />
    - count <Badge text="number" />

- **tools?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Items required to dismantle the item, but will not be consumed</span>
    - itemName <Badge text="string" />
    - count <Badge text="number" />

## Examples
::: code-group

```lua [data/dismantle.lua]
local dismantles = {
    ['clothe'] = {
        itemName = 'clothe',
        recipe = {
            {itemName = 'wool', count = 2},            
        },
        level = 1,
        category = 'Medical',
        time = 5,
    },
}

return dismantles
```

:::
