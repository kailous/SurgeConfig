# Surge Config

自定义 Surgeon 策略组和分流规则配置。你可以在 Surge 等代理工具中直接订阅或引用以下配置链接：

```text
https://kailous.github.io/SurgeConfig/Surge_Final.conf
```

## Figma 汉化模块

推荐在 Surge 中作为模块订阅：

```text
https://kailous.github.io/SurgeConfig/Modules/FigmaZhCn.sgmodule
```

模块只托管 URL Rewrite 和 MITM hostname。`ca-p12` 和 `ca-passphrase` 属于本机 MITM CA 私钥，请保留在自己的 Surge 配置里，不要公开提交到仓库。

## 分流规则集

规则集不绑定策略组名，适合在自己的 Surge 配置中按需引用：

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Adobe.list,Adobe
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Figma.list,Figma
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Behance.list,Behance
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Spotify.list,Spotify
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Grok.list,🤖Grok
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/awwwards.list,awwwards
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Claude.list,Claude
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Xiaohongshu.list,小红书
```

也可以作为 Surge 模块一键订阅。模块内规则已绑定策略组名，使用前请确保本地配置里存在 `Adobe`、`Figma`、`Behance`、`Spotify`、`🤖Grok`、`awwwards`、`Claude`、`小红书` 这些策略组：

```text
https://kailous.github.io/SurgeConfig/Modules/CustomRules.sgmodule
```

## 包含的分流规则清单 (规则组列表)

目前支持对以下应用及相关网站进行分流：

- **Adobe**
- **Figma**
- **Behance**
- **Spotify**
- **Grok**
- **awwwards**
- **Claude**
- **小红书**
