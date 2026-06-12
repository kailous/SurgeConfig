# Surge 配置

自定义 Surge 策略组、分流规则和模块配置。你可以在 Surge 中直接订阅或引用以下配置链接：

```text
https://kailous.github.io/SurgeConfig/Surge_Final.conf
```

## 模块订阅

### Figma 中文汉化

```text
https://kailous.github.io/SurgeConfig/Modules/FigmaZhCn.sgmodule
```

模块只托管 URL Rewrite 和 MITM hostname。`ca-p12` 和 `ca-passphrase` 属于本机 MITM CA 私钥，请保留在自己的 Surge 配置里，不要公开提交到仓库。

### FigmaEX 增强

```text
https://kailous.github.io/SurgeConfig/Modules/FigmaEX.sgmodule
```

模块会在 Figma 页面响应中注入托管版 FigmaEX `app.js`。这个版本不依赖 Chrome 扩展 API，但仍需要启用 Surge MITM，且 Figma 页面结构或安全策略变更时可能需要调整注入方式。

### 自定义分流规则

```text
https://kailous.github.io/SurgeConfig/Modules/CustomRules.sgmodule
```

模块内规则已绑定策略组名，使用前请确保本地配置里存在 `Adobe`、`Figma`、`Behance`、`Spotify`、`🤖Grok`、`awwwards`、`Claude`、`小红书` 这些策略组。

## 分流规则集

规则集不绑定策略组名，适合在自己的 Surge 配置中按需引用。

### 设计创作

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Adobe.list,Adobe
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Figma.list,Figma
```

### 设计社区与灵感

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Behance.list,Behance
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/awwwards.list,awwwards
```

### AI 服务

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Grok.list,🤖Grok
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Claude.list,Claude
```

### 流媒体

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Spotify.list,Spotify
```

### 社交推送

```text
RULE-SET,https://kailous.github.io/SurgeConfig/Modules/Rules/Xiaohongshu.list,小红书
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
