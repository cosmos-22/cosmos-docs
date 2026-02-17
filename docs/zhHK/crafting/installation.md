---
prev:
  text: '🛠️ 工作台系統'
  link: '/zhHK/crafting/'
next:
  text: '配置設定'
  link: '/zhHK/crafting/config/general'
---
# 依賴和安裝

## 依賴項
- **框架** — ESX / QBCore / QBox / Ox
- **背包系統** — ESX / qb-inventory / ox_inventory
- [ox_lib](https://github.com/overextended/ox_lib)
- [ox_target](https://github.com/overextended/ox_target) (可選)
:::details ✅ 測試版本
此腳本已在以下框架版本中驗證可正常運行：
- ESX **1.13.4**
- QBCore **1.3.0**
- QBox **1.23.0**
- Ox Core **1.5.1**

其他版本可能也能正常使用，但尚未經過官方測試。
:::

## 安裝步驟
### 1. **加入插件**
將資料夾放入伺服器的 `resources` 資料夾，並將其重新命名為 `csms_crafting`。

### 2. **配置**
編輯 `data` 資料夾中的檔案以符合伺服器需求。請參考 [配置設定](./config/general.md) 分頁獲取指引。

### 3. **啟動**
在 `server.cfg` 中加入 `ensure csms_crafting`。
