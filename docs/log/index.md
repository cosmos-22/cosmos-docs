---
prev:
  text: '🛠️ csms_crafting'
  link: '/crafting'
next:
  text: 'Installation'
  link: '/log/installation'
---

# 💿 csms_log

This resource provides functionality to send messages from both client and server sides to the backend via Discord Webhook embeds.

## Features
- **Built-in loggers**: Includes default logging for player connections, player drops, player deaths, and chat messages.  
- **ox_lib compatibility**: Supports directing ox_lib logger messages to a Discord webhook (especially useful in directing the built-in log message in ox_inventory) (requires setup – see [Ox_lib Setup](/log/installation/ox-lib)).  
- **Timestamps included**: Each embed message footer contains a timestamp for improved tracking of player actions.  

## Highlights
- **Convenient webhook setup**: The webhook can be passed directly as a parameter, eliminating the need to configure it in the config file.  
- **Configurable default loggers**: Easily enable or disable the built-in loggers in the config file.  
- **Target player support**: Allows logging of events involving multiple players by including a target player argument.


