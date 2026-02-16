---
prev:
  text: 'Installation'
  link: '/crafting/installation'
next:
  text: 'NUI settings'
  link: '/crafting/config/nui'
---

# General Configuration

General settings are configured in `/data/settings.lua`.

## Options

- **debugMode** <Badge text="boolean" />

- **marker?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — Appearance of the triggering point if target is not enabled</span>
    - type <Badge text="number" /><span style="color:gray; font-size:15px"> — Refer to [FiveM documentation](https://docs.fivem.net/docs/game-references/markers/) for markers ID</span>
    - rotation <Badge text="vector3" />
    - zOffset <Badge text="number" />
    - color <Badge text="table" />
        - r <Badge text="number" />
        - g <Badge text="number" />
        - b <Badge text="number" />
        - a <Badge text="number" />

- **enableLevel** <Badge text="boolean" /><span style="color:gray; font-size:15px"> — Whether to use the built in leveling system</span>

- **levelUpExp**? <Badge text="function" /> ( level: <Badge text="number" /> )<span style="color:gray; font-size:15px"> — How the system will calculate the Exp required for the next level up</span>

- **craftingAnim?** <Badge text="table" /><span style="color:gray; font-size:15px"> — Animation when crafting, keep `nil` to disable animation</span>
    - dict <Badge text="string" />
    - clip <Badge text="string" />

- **notify** <Badge text="function" /> <span style="color:gray; font-size:15px"> — Change it to your preferred notification system, default using ox_lib notification</span>

- **platePattern** <Badge text="string" /><span style="color:gray; font-size:15px"> — Pattern of the plate of newly crafted vehicles, refer to [ox_lib documentation](https://coxdocs.dev/ox_lib/Modules/String/Shared#stringrandom) for the pattern</span>
::: warning OX_CORE Compatability
If you are using `ox_core`, the platePattern setting is only supported on version 1.5.8 or later. For earlier versions, the system will instead use the pattern defined in `ox:plateFormat`.
:::

- **vehicleAdded** <Badge text="function" /> ( source:<Badge text="number" />, itemName: <Badge text="string" />, plate<Badge text="string" /> )<span style="color:gray; font-size:15px"> — Triggered on sesrver side when a vehicle is crafted, useful for giving car key</span>

## Default settings

::: code-group

```lua [data/settings.lua]
local settings = {
    marker = {
        type = 27,
        rotation = vec3(0.0, 0.0, 0.0),
        zOffset = 0.9,
        color = { r = 255, g = 0, b = 0, a = 100 },
    },

    enableLevel = true,
    levelUpExp = function(level)
        return math.floor((level * 100))
    end,

    craftingAnim = {
        dict = 'mini@repair',
        clip = 'fixing_a_ped'
    },

    platePattern = 'AAAA1111',

    vehicleAdded = function(source, itemName, plate)
    if not IsDuplicityVersion() then return end
    -- you can add your custom code here for when a vehicle is added, for example adding car key
    end,

    notify = function(...)
        local arg = {...}
        if IsDuplicityVersion() then
            TriggerClientEvent('ox_lib:notify', arg[1], { type = arg[3], description = arg[2] })
        else
            lib.notify({
                description = arg[1],
                type = arg[2]
            })
        end
    end
}

return settings
```

:::