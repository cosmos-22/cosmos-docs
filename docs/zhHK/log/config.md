---
prev:
  text: '安裝指南'
  link: '/zhHK/log/installation'
next:
  text: '使用方式'
  link: '/zhHK/log/usage'
---
# 安裝指南
一般設定和內建記錄設置定義於 `config.lua`。

```lua
Config = {}

Config.useIdentityName = true   --目前只支援ESX

Config.username = "Server Log"
Config.defaultColor = 3066993  -- 綠色 = 3066993

Config.strings = {
    ['player1'] = 'Player 1',
    ['player2'] = 'Player 2',

}

Config.defaultLogs = {
    connecting = {
        enable = true,
        label = '%s has joined the server',
        webhook = 'https://discord.com/api/webhooks/',
    },
    dropped = {
        enable = true,
        label = '%s has left the server',
        webhook = 'https://discord.com/api/webhooks/',
        color = 15548997
    },
    dead = {    --目前只支援 ESX
        enable = true,
        label = '%s is killed by %s at %s',
        webhook = 'https://discord.com/api/webhooks/',
        color = 15548997
    },
    chat = {
        enable = true,
        label = '%s: %s',
        webhook = 'https://discord.com/api/webhooks/',
    },
}

Config.resoourceWebhook = { --與 ox_lib logger 相容
    ['ox_inventory'] = 'https://discord.com/api/webhooks/'
}
```