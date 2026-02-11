# 疑難排解

## You lack the required entitlement to use `[插件名字]`
> 所有 COSMOS 插件皆透過 FiveM 託管系統交付。伺服器必須使用與購買資插件時所用**相同**的 Cfx 帳戶所產生的金鑰。

**修正：**請在 `server.cfg` 檔案中定義伺服器金鑰，使用購買 Cfx 帳戶下所生成的任何金鑰即可。

:::code-group

```cfg [server.cfg]
setr sv_licenseKey "cfxk_XXXXXXXXXXX"
```

:::
