# Troubleshooting

## You lack the required entitlement to use `[resource_name]`
> All COSMOS resources are dilevered through the FiveM Escrow system. The server must use a license key generated from the **same** Cfx account that purchased the resource.

**FIX:** Define your server license key in `server.cfg` using any key created under the purchasing Cfx account.

:::code-group

```cfg [server.cfg]
setr sv_licenseKey "cfxk_XXXXXXXXXXX"
```

:::
