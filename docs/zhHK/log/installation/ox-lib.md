---
prev:
  text: '安裝指南'
  link: '/zhHK/log/installation'
next:
  text: '配置設定'
  link: '/zhHK/log/config'
---
# Ox_lib 設置

此功能主要用於接收來自 `ox_inventory` 的記錄。另外，你也可以透過 ox_lib 的 logger 函式傳送紀錄。

1. 在 `server.cfg` 中加入以下行  
```cfg
set ox:logger "discord"
```

2. 在 `ox_lib/imports/logger/server.lua` 檔案底部、`return lib.logger` 之前加入以下行  
```lua
if service == 'discord' then
    function lib.logger(source, event, message, ...)
        TriggerEvent('csms_log:fromOx', event, message, cache.resource, nil, nil, source)
    end
end
```

3. 在 `config.lua` 中將 webhook 加入至 `Config.resoourceWebhook`，其中 **key** 為資源名稱，**value** 為 webhook。  
   範例：
```lua
Config.resoourceWebhook = {
    ['ox_inventory'] = 'https://discord.com/api/webhooks/'
}
```

4. 在需要傳送紀錄的地方加入 ox_lib logger。請參閱 [ox_lib 文件](https://coxdocs.dev/ox_lib/Modules/Logger/Server)。  

::: warning ⚠️注意
若使用 tags，它們將不會隨 Discord 訊息一同傳送  
:::

