---
prev:
  text: '匯出 (Exports)'
  link: '/zhHK/crafting/exports/server'
---

# 管理員指令

此頁面記錄可用的指令。

## `/addCraftExp`
[管理員限定] 在內建等級系統中為玩家增加經驗值。

參數:  
- target <Badge text="number" /> <span style="color:gray; font-size:15px"> — 玩家在伺服器中的 ID</span>  
- exp <Badge text="number" /> <span style="color:gray; font-size:15px"> — 要給予的經驗值數量</span>  

## `/setCraftLv`
[管理員限定]設定玩家在內建等級系統中的合成等級。經驗值將自動重設為 0。

參數:  
- target <Badge text="number" /> <span style="color:gray; font-size:15px"> — 玩家在伺服器中的 ID</span>  
- level <Badge text="number" /> <span style="color:gray; font-size:15px"> — 要設定的等級</span>  

## `/getCraftLv`
獲取該玩家在內建等級系統中的合成等級和經驗值。