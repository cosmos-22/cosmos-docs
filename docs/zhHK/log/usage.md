---
prev:
  text: '配置設定'
  link: '/zhHK/log/config'
---

# 使用方式

## 事件
### 從客戶端 (Client)
```lua
TriggerServerEvent('csms_log', msg, webhook, color, target)
```

> ⚠️ **注意**：**不建議**使用客戶端觸發，因為 webhook 可能會被攔截或洩露。

### 從伺服器端 (Server)
```lua
TriggerEvent('csms_log', msg, webhook, color, target, source)
```

---

### 參數說明

| 參數       | 類型     | 說明                                                                 |
|------------|----------|----------------------------------------------------------------------|
| `msg`      | string   | 記錄訊息內容                                                         |
| `webhook`  | string   | Discord Webhook URL，用於傳送嵌入訊息                                 |
| `color`    | integer  | Discord 嵌入訊息的顏色 （可選）                                     |
| `target`   | integer  | 另一個相關玩家的伺服器 ID （可選）                                  |
| `source`   | integer  | 觸發玩家的伺服器 ID (僅伺服器端呼叫時需要)                            |

## 範例

### 客戶端範例
```lua
TriggerServerEvent('csms_log', '玩家登入', 'https://discord.com/api/webhooks/...', 3447003)
```

### 伺服器端範例
```lua
TriggerEvent('csms_log', '玩家登出', 'https://discord.com/api/webhooks/...', 15158332, nil, 34)
```