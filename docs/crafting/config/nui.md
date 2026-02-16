---
prev:
  text: 'General'
  link: '/crafting/config/general'
next:
  text: 'Workbenches'
  link: '/crafting/config/workbench'
---

# NUI Configuration

NUI-related settings are configured in `/data/nui.lua`.

## Options

- **DefaultDescription** <Badge text="string" /> <span style="color:gray; font-size:15px"> — Default description when description is not defined in the recipe</span>

- **ItemMax** <Badge text="number" /><span style="color:gray; font-size:15px"> — Maxmimum number of items the player can craft at one click</span>

- **ImagePath**? <Badge text="string" /><span style="color:gray; font-size:15px"> — The image path of the item images</span>

- **PrimaryColor** <Badge text="string" /><span style="color:gray; font-size:15px"> — Primary color of the NUI</span>

- **EnableStar** <Badge text="boolean" /> <span style="color:gray; font-size:15px"> — Whether to turn on the stars effect on the background of the NUI</span>

## Default settings

::: code-group

```lua [data/nui.lua]
local nui = {
    DefaultDescription = 'No description available.',
    ItemMax = 20,
    ImagePath = 'nui://ox_inventory/web/images/',
    PrimaryColor = '#9333ea',
    EnableStar = true,
}

return nui
```

:::