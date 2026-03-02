---
prev:
  text: 'Configuration'
  link: '/log/config'
---

# Usage

## Event
### From Client
```lua
TriggerServerEvent('csms_log', msg, webhook, color, target)
```

::: warning ⚠️ Note
Client-side triggering is **not recommended**, as the webhook may be intercepted or exposed.
:::

### From Server
```lua
TriggerEvent('csms_log', msg, webhook, color, target, source)
```

---

### Parameters

| Parameter  | Type     | Description                                                           |
|------------|----------|-----------------------------------------------------------------------|
| `msg`      | string   | The log message content                                               |
| `webhook`  | string   | Discord Webhook URL used to send the embed message                    |
| `color`    | integer  | Embed color value (optional)                                           |
| `target`   | integer  | Server ID of another related player (optional)       |
| `source`   | integer  | Server ID of the triggering player (required only when called server-side) |

## Examples

### Client Example
```lua
TriggerServerEvent('csms_log', 'Player Login', 'https://discord.com/api/webhooks/...', 3447003, 12)
```

### Server Example
```lua
TriggerEvent('csms_log', 'Player Logout', 'https://discord.com/api/webhooks/...', 15158332, nil, 34)
```