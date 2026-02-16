---
prev:
  text: '安裝指南'
  link: '/zhHK/crafting/installation'
next:
  text: 'NUI 設定'
  link: '/zhHK/crafting/config/nui'
---

# 通用配置

一般設定位於 `/data/settings.lua`。

## 選項

- **debugMode** <Badge text="boolean" />

- **marker?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — 當未啟用 target 時，觸發點光圈的外觀</span>  
    - type <Badge text="number" /><span style="color:gray; font-size:15px"> — 請參考 [FiveM 文件](https://docs.fivem.net/docs/game-references/markers/) 以取得標記 ID</span>  
    - rotation <Badge text="vector3" />  
    - zOffset <Badge text="number" />  
    - color <Badge text="table" />  
        - r <Badge text="number" />  
        - g <Badge text="number" />  
        - b <Badge text="number" />  
        - a <Badge text="number" />  

- **enableLevel** <Badge text="boolean" /><span style="color:gray; font-size:15px"> — 是否使用內建的等級系統</span>  

- **levelUpExp**? <Badge text="function" /> ( level: <Badge text="number" /> )<span style="color:gray; font-size:15px"> — 系統如何計算升級所需的經驗值</span>  

- **craftingAnim?** <Badge text="table" /><span style="color:gray; font-size:15px"> — 合成時的動作，保持 `nil` 以停用動作</span>  
    - dict <Badge text="string" />  
    - clip <Badge text="string" />  

- **notify** <Badge text="function" /> <span style="color:gray; font-size:15px"> — 可更改為你偏好的通知系統，預設使用 ox_lib 通知</span>  

- **platePattern** <Badge text="string" /><span style="color:gray; font-size:15px"> — 新合成載具的車牌樣式，請參考 [ox_lib 文件](https://coxdocs.dev/ox_lib/Modules/String/Shared#stringrandom) 以設定樣式</span>  
::: warning OX_CORE 相容性
若你使用 `ox_core`，`platePattern` 設定僅支援 1.5.8 或以上版本。較舊版本則會使用 `ox:plateFormat` 中定義的樣式。
:::

- **vehicleAdded** <Badge text="function" /> ( source:<Badge text="number" />, itemName: <Badge text="string" />, plate<Badge text="string" /> )<span style="color:gray; font-size:15px"> — 當載具被合成時於伺服器端觸發，常用於發放車鑰匙</span>  

## 預設設定

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