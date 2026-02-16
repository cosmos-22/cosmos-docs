---
prev:
  text: '合成物品'
  link: '/zhHK/crafting/config/crafting_items'
next:
  text: '匯出 (Exports)'
  link: '/zhHK/crafting/exports/server'
---

# 拆解物品

拆解物品定義於 `/data/dismantle.lua`。

物品以 key-value 配對的形式定義。Key 作為配方的 ID，並會在程式碼中引用。

## 選項

- **itemName** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 被拆解物品的名稱</span>  

- **label?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 設定此選項將覆蓋原始物品標籤</span>  

- **category** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 用於在 NUI 中分組物品的標籤</span>  

- **description?** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 顯示於 NUI 的物品描述，若未定義則使用預設描述</span>  

- **time** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 拆解所需時間（秒）</span>  

- **level?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 使用此配方所需等級，必須在 `settings.lua` 中將 enableLevel 設為 `true`</span>  

- **exp?** <Badge text="number" /> <span style="color:gray; font-size:15px"> — 拆解完成後給予玩家的經驗值，必須在 `settings.lua` 中將 enableLevel 設為 `true`</span>  

- **recipe** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 拆解後給予玩家的物品</span>  
    - itemName <Badge text="string" />  
    - count <Badge text="number" />  

- **tools?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 拆解物品所需但不會被消耗的物品</span>  
    - itemName <Badge text="string" />  
    - count <Badge text="number" />  

## 範例
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
