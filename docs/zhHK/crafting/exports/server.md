---
prev:
  text: '配置設定'
  link: '/zhHK/crafting/config/general'
next:
  text: '指令'
  link: '/zhHK/crafting/commands'
---

# 伺服器匯出

此頁面記錄所有伺服器端可用的匯出功能。

## AddExp
在內建等級系統中為玩家增加經驗值。

```lua
exports.csms_crafting:AddExp(source, exp)
```
- source <Badge text="number" /> <span style="color:gray; font-size:15px"> — 玩家在伺服器中的 ID</span>
- exp <Badge text="number" /> <span style="color:gray; font-size:15px"> — 要給予的經驗值數量</span>