---
prev:
  text: '一般'
  link: '/zhHK/crafting/config/general'
next:
  text: 'Workbenches'
  link: '/zhHK/crafting/config/workbench'
---

# NUI 配置

與 NUI 相關的設定位於 `/data/nui.lua`。

## 選項

- **DefaultDescription** <Badge text="string" /> <span style="color:gray; font-size:15px"> — 當未在配方中定義描述時的預設描述</span>  

- **ItemMax** <Badge text="number" /><span style="color:gray; font-size:15px"> — 玩家一次可合成的最大物品數量</span>  

- **ImagePath**? <Badge text="string" /><span style="color:gray; font-size:15px"> — 物品圖片的路徑</span>  

- **PrimaryColor** <Badge text="string" /><span style="color:gray; font-size:15px"> — NUI 的主要顏色</span>  

- **EnableStar** <Badge text="boolean" /> <span style="color:gray; font-size:15px"> — 是否在 NUI 背景啟用星星效果</span>  

## 預設設定

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