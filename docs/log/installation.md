---
prev:
  text: '💿 csms_log'
  link: '/log/'
next:
  text: 'Ox_lib Compatibility'
  link: '/log/installation/ox-lib'
---
# Dependencies & Installation

## Dependencies
- **Framework** — ESX (optional)
- [ox_lib](https://github.com/overextended/ox_lib) (optional)

## Installation
### 1. **Add to Resources:**
 Place the folder into your server's `resources` directory and rename it as `csms_log`.
### 2. **Configure:** 
Add your webhook links for the default loggers in `config.lua`.
### 3. **Setup loggers:** 
Setup by referring to [Usage](/log/usage).
### 4. **Setup for ox_lib (optional):** 
Refer to [Ox_lib Setup](/log/installation/ox-lib).
### 5. **Start:** 
Add `ensure csms_log` to your `server.cfg`.