---
prev:
  text: 'Installation'
  link: '/log/installation'
next:
  text: 'Configuration'
  link: '/log/config'
---
# Ox_lib Setup

This function is mainly used to receive log from `ox_inventory`. Alternatively, you can send a log message through the ox_lib logger function.

1. In `server.cfg`, add the following line
```cfg
set ox:logger "discord"
```

2. In `ox_lib/imports/logger/server.lua`, add the following line at the bottom just before `return lib.logger`
```lua
if service == 'discord' then
    function lib.logger(source, event, message, ...)
        TriggerEvent('csms_log:fromOx', event, message, cache.resource, nil, nil, source)
    end
end
```

3. Add the webhook to `Config.resoourceWebhook` in `config.lua`, with the **key** being the resource name and the **value** being the webhook.
    Example:
```lua
Config.resoourceWebhook = {
    ['ox_inventory'] = 'https://discord.com/api/webhooks/'
}
```

4. Add a ox_lib logger wherever you want to send a log message. Refer to the [ox_lib documentation](https://coxdocs.dev/ox_lib/Modules/Logger/Server).

::: warning ⚠️Note
If tags are used, they will not be sent with the discord log message
:::

