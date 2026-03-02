---
prev:
  text: 'Installation'
  link: '/log/installation'
next:
  text: 'Usage'
  link: '/log/usage'
---
# Configuration
General settings and default logger settings are configured in `config.lua`.

```lua
Config = {}

Config.useIdentityName = true   --currently only support with esx

Config.username = "Server Log"
Config.defaultColor = 3066993  -- green = 3066993

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
    dead = {    --currently only support with esx
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

Config.resoourceWebhook = { --work with ox_lib's logger
    ['ox_inventory'] = 'https://discord.com/api/webhooks/'
}
```