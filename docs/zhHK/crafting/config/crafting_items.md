---
prev:
  text: 'Workbenches'
  link: '/crafting/config/workbench'
next:
  text: 'Dismantle Items'
  link: '/crafting/config/dismantle_items'
---

# Crafting Items

Crafting items are defined in `/data/craft.lua`.

Items are defined with key, value pairs. Key serves as the ID of the recipe and will be used to refer by the code.

## Options

- **itemName** <Badge text="string" /> <span style="color:gray; font-size:15px"> — The item name of the item being crafted</span>

- **label?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — Setting this option will override the original item label </span>

- **type?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — When set to `car` will craft a vehicle with the model of the itemName </span>


- **category** <Badge text="string" /> <span style="color:gray; font-size:15px"> — The label used to group the item in the NUI </span>

- **description?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — Description of the item shown in the NUI, will use the default description if not defined </span>

- **stats?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Statistics shown under the description to provide further information about the item, can be used to show vehicle speed or weapon damage </span>
    - icon <Badge text="string" /> <span style="color:gray; font-size:15px"> — Any icon from [Iconify](https://icon-sets.iconify.design/) </span>
    - color <Badge text="string" /> <span style="color:gray; font-size:15px"> — Colour of the icon in rgb </span>
    - label <Badge text="string" />
    - value <Badge text="string" />

- **time** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Crafting time in second </span>

- **level?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Level required to use this recipe, you must set enableLevel to `true` in `settings.lua` to use this option</span>

- **exp?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — Exp given to the player when the crafting is done, you must set enableLevel to `true` in `settings.lua` to use this option</span>

- **recipe** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Items to be consumed</span>
    - itemName <Badge text="string" />
    - count <Badge text="number" />

- **tools?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Items required to craft the item, but will not be consumed</span>
    - itemName <Badge text="string" />
    - count <Badge text="number" />

## Example
::: code-group

```lua [data/craft.lua]
local crafts = {
    ['bandage'] = {
        itemName = 'bandage',
        category = 'Medical',
        description = 'Used to stop bleeding and restore a small amount of health.',
        time = 5,
        level = 1,
        exp = 10,
        recipe = {
            {itemName = 'clothe', count = 1},            
        },
        tools = {
            {itemName = 'clothe', count = 1},            
        },
    },
    ['t20'] = {
        itemName = 't20',
        label = 'T20',
        type = 'car',
        category = 'Vehicle',
        stats = {
            {icon = 'mdi:gear', label = 'Engine', value = '3%', color = 'rgb(58, 196, 127)'},
        },
        time = 10,
        level = 5,
        recipe = {
            {itemName = 'iron', count = 10},            
        },
        tools = {
            {itemName = 'fixkit', count = 1}
        },
    }
}

return crafts
```

:::
