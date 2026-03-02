---
prev:
  text: '💿 csms_log'
  link: '/zhHK/log/'
next:
  text: 'Ox_lib 相容性'
  link: '/zhHK/log/installation/ox-lib'
---
# 安裝與需求

## 依賴項
- **框架** — ESX（可選）  
- [ox_lib](https://github.com/overextended/ox_lib)（可選）  

## 安裝步驟
### 1. **加入資源：** 
將當按解壓縮放入 `resources` 資料夾，並將插件命名為 `csms_log`。  
### 2. **設定：** 
在 `config.lua` 中為預設記錄加入你的 webhook 連結。  
### 3. **設置紀錄:**
參考 [使用方式](/zhHK/log/usage) 設置紀錄。
### 4. **ox_lib 設定（可選）：** 
請參閱 [Ox_lib 相容性](/zhHK/log/installation/ox-lib)。  
4. **啟動：** 在 `server.cfg` 中加入 `ensure csms_log`。  