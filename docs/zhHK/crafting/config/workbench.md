---
prev:
  text: 'NUI Settings'
  link: '/crafting/config/nui'
next:
  text: 'Crafting Items'
  link: '/crafting/config/crafting_items'
---

# Workbenches

You can add your workbenches in `/data/workbench.lua`.

## Options

- **coords** <Badge text="vector4" /> <span style="color:gray; font-size:15px"> — Coordinates of the triggering point</span>

- **distance** <Badge text="number" /><span style="color:gray; font-size:15px"> — Interactive distance</span>

- **prop?** <Badge text="table" /> ( level: <Badge text="number" /> )<span style="color:gray; font-size:15px"> — Will only spawn when defined</span>
    - model <Badge text="string" />
    - coords <Badge text="vector4" />

- **blip?** <Badge text="table" /><span style="color:gray; font-size:15px"> — Will only show when defined</span>
    - sprite <Badge text="number" /><span style="color:gray; font-size:15px"> — Appearance of the blip, refer to [FiveM documentation](https://docs.fivem.net/docs/game-references/blips/) for sprite ID</span>
    - color <Badge text="number" /><span style="color:gray; font-size:15px"> — Colour of the blip, refer to [FiveM documentation](https://docs.fivem.net/docs/game-references/blips/) for colour ID</span>
    - scale <Badge text="number" />
    - name <Badge text="string" /> <span style="color:gray; font-size:15px"> — Label of the blip</span>

- **job?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — Only the job defined here can interact with the workbench</span>
    - [jobName] <Badge text="number" /><span style="color:gray; font-size:15px"> — Define the key as the job's name and the value as the minimum grade</span>

- **crafts?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — put the ID (the key) of the recipe that can be crafted in this workbench, the recipe must be defined in [data/craft.lua](/crafting/config/crafting_items) </span>

- **dismantles?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — put the ID (the key) of the recipe that can be dismantled in this workbench, the recipe must be defined in [data/dismantle.lua](/crafting/config/dismantle_items) </span>

## Examples

::: code-group

```lua [data/workbench.lua]
local workbench = {
    {
        coords = vec4(210.4228, -927.1317, 30.6920, 236.9225),
        distance = 1.2,
        prop = {
            model = 'gr_prop_gr_bench_04a',
            coords = vec4(211.5069, -927.7875, 30.6920, 236.9225)
        },
        blip = {
            sprite = 123,
            color = 5,
            scale = 0.8,
            name = 'Workbench'
        },
        crafts = {'t20'},
    },
    {
        coords = vec4(309.4300, -596.9056, 43.2918, 344.7367),
        distance = 1.2,
        job = {['ambulance'] = 2},
        crafts = {'bandage'},
        dismantles = {'cloth'},
    },
}

return workbench
```

:::