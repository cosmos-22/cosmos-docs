---
prev:
  text: '🛠️ csms_crafting'
  link: '/zhHK/crafting'
next:
  text: '安裝指南'
  link: '/zhHK/log/installation'
---

# 💿 csms_log

此插件提供從客戶端與伺服器端透過 Discord Webhook 嵌入傳送訊息至後台的功能。

---

## 🎯 插件功能
- **內建記錄**：內建玩家連線、玩家離線、玩家死亡以及聊天訊息事件的記錄
- **ox_lib 相容性**：可將 ox_lib logger 訊息直接導向 Discord Webhook (在導向 ox_inventory 內建紀錄尤其有用)（需額外設定 – 請參閱 [Ox_lib 設置](/zhHK/log/installation/ox-lib)）
- **時間戳記**：在嵌入訊息的頁尾附加時間戳記，方便追蹤玩家行為

## 🔗 代碼特色
- **方便的 Webhook 設定**：Webhook 作為參數直接傳入，無需在設定檔中額外配置
- **可選的預設功能**：可在設定檔中輕鬆開啟或關閉內建記錄。
- **支援目標玩家參數**：可記錄涉及多位玩家的事件，提升訊息的完整性

## 🛠️ 安裝與需求
__依賴項__  
- **框架** — ESX（可選）  
- [ox_lib](https://github.com/overextended/ox_lib)（可選）  


