---
prev:
  text: 'NUI 設定'
  link: '/zhHK/crafting/config/nui'
next:
  text: '合成物品'
  link: '/zhHK/crafting/config/crafting_items'
---

# 工作台配置

你可以在 `/data/workbench.lua` 中新增工作台。

## 選項

- **coords** <Badge text="vector4" /><span style="color:gray; font-size:15px"> — 觸發點的座標</span>  

- **distance** <Badge text="number" /><span style="color:gray; font-size:15px"> — 互動距離</span>  

- **prop?** <Badge text="table" /><span style="color:gray; font-size:15px"> — 僅在被定義時生成</span>  
    - model <Badge text="string" />  
    - coords <Badge text="vector4" />  

- **useTarget?** <Badge text="boolean" /><span style="color:gray; font-size:15px"> — 使用 `ox_target` 代替光圈來開啟工作台。若有定義 prop，target 將附加在 prop 上；否則會在座標建立 sphere zone</span>  

- **blip?** <Badge text="table" /><span style="color:gray; font-size:15px"> — 僅在被定義時顯示</span>  
    - sprite <Badge text="number" /><span style="color:gray; font-size:15px"> —地圖點的外觀，請參考 [FiveM 文件](https://docs.fivem.net/docs/game-references/blips/) 以取得地圖點 ID</span>  
    - color <Badge text="number" /><span style="color:gray; font-size:15px"> — 地圖點的顏色，請參考 [FiveM 文件](https://docs.fivem.net/docs/game-references/blips/) 以取得顏色 ID</span>  
    - scale <Badge text="number" />  
    - name <Badge text="string" /> <span style="color:gray; font-size:15px"> — 地圖點的名稱</span>  

- **job?** <Badge text="table[]" /> <span style="color:gray; font-size:15px"> — 僅被定義的職業可與工作台互動</span>  
    - [jobName] <Badge text="number" /><span style="color:gray; font-size:15px"> — 將 key 設為職業名稱，value 設為最低等級</span>  

- **crafts?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — 放置可在此工作台合成的配方 ID (key)，該配方必須在 [data/craft.lua](/crafting/config/crafting_items) 中定義</span>  

- **dismantles?** <Badge text="table" /> <span style="color:gray; font-size:15px"> — 放置可在此工作台拆解的配方 ID (key)，該配方必須在 [data/dismantle.lua](/crafting/config/dismantle_items) 中定義</span>  

## 範例

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
            sprite = 544,
            color = 11,
            scale = 0.9,
            name = 'Workbench'
        },
        crafts = {'t20', 'pistol'},
        dismantles = {'cloth'}
    },
    {
        coords = vec4(309.4300, -596.9056, 43.2918, 344.7367),
        distance = 3.0,
        job = {['ambulance'] = 2},
        crafts = {'bandage'},
        dismantles = {'bandage'},
        useTarget = true
    },
}

return workbench
```

:::