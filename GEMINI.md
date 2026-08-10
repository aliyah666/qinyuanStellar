# 项目上下文：覃远的思想杂货店（Hexo + Stellar 博客）

> 本文件用于给 Gemini CLI 提供项目背景，使代码审查 / 改写更贴合本项目规范。

## 1. 项目性质
- **静态博客**，由 [Hexo](https://hexo.io/zh-cn/)（`^7.3.0`）生成，主题 [hexo-theme-stellar](https://github.com/xaoxuu/hexo-theme-stellar)（`^1.33.1`）。
- 部署目标：**Vercel**。构建命令 `hexo generate`，输出目录 `public`，运行环境 Node 20（`package.json` 中 `engines.node: ">=18 <=20"`）。
- 正式域名：`https://qinyuan.me`（站点 `url` 已配置）。图片 CDN：`https://img.qinyuan.me/...`。
- 博客同名公众号 / 账号：「**覃远的思想杂货店**」，作者 **Hardy**。

## 2. 目录与配置文件约定
- `source/_posts/*.md`：文章正文（Markdown + Hexo front-matter + Stellar 标签插件）。
- `source/about/`、`source/images/`：关于页与本地图片资源。
- `_config.yml`：**站点级**配置（title/url/theme/deploy 等）。
- `_config.stellar.yml`：**Stellar 主题级**配置（外观、侧边栏、SEO、评论、widgets 等）。注意 Stellar 把主题配置放在站点根目录而非 `themes/stellar/_config.yml`。
- 已被 `.gitignore` 忽略：`node_modules/`、`public/`、`db.json`、`*.log`、`.deploy_git/`。
- **不要**把 `public/`（构建产物）或 `node_modules/` 提交进仓库。

## 3. 文章 front-matter 规范（Hexo）
每篇文章头部必须 / 建议包含：
```yaml
---
title: 文章标题           # 必填
date: 2026-07-10 00:00:00 # 必填，YYYY-MM-DD HH:mm:ss
tags: [标签1, 标签2]       # 建议
categories: [分类]        # 建议
description: 一句话摘要    # 建议（用于 SEO / 列表摘要）
slug: free-ai-assistant   # 可选，自定义永久链接
---
```
- 日期格式必须能被 Hexo 解析；缺 `title`/`date` 会导致 `hexo generate` 失败或文章不生成。
- `permalink: :year/:month/:day/:title/`，`title` 含中文时留意 URL 编码问题。

## 4. 内容调性与文案规范
- **语言**：中文为主，第一人称真实人设（作者 Hardy），松弛、敢讲失败、忌假大空 / 夸大收益。
- 两类内容：**叙事类**（有故事性、具体细节）与**技术类**（背景→思路→步骤→踩坑→结论，条理清晰）。
- 公众号图文不能直接跳外链；若文中需引导到博客，用「同名搜索 / 复制打开 qinyuan.me」或「阅读原文」文字引导，不要硬编码不可点的跳转。

## 5. Stellar 标签插件（tag plugins）
Stellar 使用 `{% ... %}` 语法（非标准 Markdown），常见如：
- `{% note ... %}...{% endnote %}`（提示框，需成对闭合）
- `{% quot ... %}...{% endquot %}`（引用）
- `{% link ... %}`（内链卡片）
- `{% inlineimg ... %}`、`{% gallery ... %}` 等
- 普通 Markdown 图片用 `![alt](url)`。
审查时注意：标签插件**必须成对闭合**、参数格式正确，否则 `hexo generate` 会报错。

## 6. 常见坑（审查时重点看）
1. front-matter 缺字段 / 日期格式错 → 构建失败。
2. 内部链接用相对路径 vs Stellar `{% link %}` 的选择；外链是否可达。
3. 资源引用：本地 `source/images/` 下的图是否被 `public/` 正确拷贝；CDN 图是否过大影响性能。
4. `_config.yml` 与 `_config.stellar.yml` 混淆（改主题外观要改后者）。
5. SEO：`title`/`description`/`url` 是否完整；`permalink` 是否产生重复或中文乱码。
6. `public/`、`node_modules/`、`db.json` 是否被误提交。
7. 中英文标点混用、代码块未标语言、标题层级跳跃（如 H1 直接到 H3）。
8. 文案是否与「真实人设、中文、不夸大」调性一致。
