---
prev:
  text: '工作台'
  link: '/zhHK/crafting/config/workbench'
next:
  text: '拆解物品'
  link: '/zhHK/crafting/config/dismantle_items'
---

# 合成物品

合成物品定義於 `/data/craft.lua`。

物品以 key-value 配對的形式定義。Key 作為配方的 ID，並會在程式碼中引用。

## 選項

- **itemName** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 被合成物品的名稱</span>  

- **label?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 設定此選項將覆蓋原始物品標籤</span>  

- **type?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 設為 `car` 時，會以 itemName 的模型合成載具</span>  

- **category** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 用於在 NUI 中分組物品的標籤</span>  

- **description?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 顯示於 NUI 的物品描述，若未定義則使用預設描述</span>  

- **stats?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 顯示於描述下方的統計資訊，可用於顯示載具速度或武器傷害</span>  
    - icon <Badge text="string" /> <span style="color:gray; font-size:15px"> — 來自 [Iconify](https://icon-sets.iconify.design/) 的任意圖示</span>  
    - color <Badge text="string" /> <span style="color:gray; font-size:15px"> — 圖示的 顏色</span>  
    - label <Badge text="string" />  
    - value <Badge text="string" />  

- **time** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 合成所需時間（秒）</span>  

- **level?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 使用此配方所需等級，必須在 `settings.lua` 中將 enableLevel 設為 `true`</span>  

- **exp?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 合成完成後給予玩家的經驗值，必須在 `settings.lua` 中將 enableLevel 設為 `true`</span>  

- **recipe** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 合成時消耗的物品</span>  
    - itemName <Badge text="string" />  
    - count <Badge text="number" />  

- **tools?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 合成所需但不會被消耗的物品</span>  
    - itemName <Badge text="string" />  
    - count <Badge text="number" />  

## 範例
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
            {itemName = 'clothe', count = 5},            
        },
    },
    ['pistol'] = {
        itemName = 'weapon_pistol',
        category = 'Weapon',
        description = 'Used for basic self‑defense, offering moderate damage at close range.',
        time = 20,
        level = 3,
        exp = 50,
        recipe = {
            {itemName = 'copper', count = 5},
            {itemName = 'iron', count = 5},                   
        },
        tools = {
            {itemName = 'blueprint', count = 1},            
        },
    },
    ['t20'] = {
        itemName = 't20',
        label = 'T20',
        type = 'car',
        category = 'Vehicle',
        stats = {
            {icon = 'material-symbols:speed', label = 'Speed', value = '200 km/h', color = 'rgb(58, 196, 127)'},
        },
        time = 10,
        level = 5,
        recipe = {
            {itemName = 'iron', count = 30},            
        },
        tools = {
            {itemName = 'fixkit', count = 1}
        },
    }
}

return crafts
```

:::
