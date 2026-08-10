# 变更日志（CHANGELOG）

> 本文件记录 qinyuan.me 博客工程的维护变更与关键注意点，方便日后回忆与排查。
> 条目按时间倒序排列，最新在最上。

---

## 2026-08-10 · 修复移动端 ScrollReveal 动画失效 + 调整动画参数

### 问题背景

- 博客基于 **Hexo + Stellar 主题 1.33.1**（主题经 npm 安装于 `node_modules/hexo-theme-stellar`）。
- PC 端动画正常，**安卓移动端动画完全不可见**（元素直接显示、无滑入动画）。
- 要求：**不升级主题版本**的前提下修复。

### 根因

Stellar 1.33.1 默认的 `scrollreveal.ejs`（主题模板）**硬编码**了三个滚动容器：

```js
ScrollReveal({ container: '.widgets' }).reveal('.slide-up', {...});
ScrollReveal({ container: '.l_main'  }).reveal('.slide-up', {...});
ScrollReveal({ container: '.l_right' }).reveal('.slide-up', {...});
```

移动端单列布局下，`.l_main`/`.l_right` 的 `overflow` 变为 `visible`，不再是滚动容器、不产生 scroll 事件，ScrollReveal 监听不到滚动 → 动画不触发。此问题官方在 **1.36.0** 修复。

### 解决方案（不升级）

在 `_config.stellar.yml` 的 `plugins.scrollreveal.inject` 注入**自包含**修复脚本（`inject` 会整体绕过默认模板）：

1. **不硬编码容器**：常规 `.slide-up` 元素改用 `window` 滚动监听（PC/移动端均有效）；
2. **吸顶容器分组**：`sticky`/`fixed` 定位容器内的元素按其真实滚动父容器分组 reveal，避免被 ScrollReveal 按文档坐标误判为不可见（官方 1.36+ 的核心修复点）；
3. **3 秒 watchdog + `sr-fallback` 兜底**：初始化失败/库加载失败时强制元素可见，防止白屏。

**关键坑（重要）**：
- Stellar **1.33.1 没有 `utils.initPlugin` / `utils.js`**（1.36+ 才新增）。官方 1.37.0 的 `scrollreveal.ejs` 依赖这两个工具函数，**不能直接照搬**，必须写成自包含 JS（`DOMContentLoaded` + 原生代码）。
- `_config.stellar.yml` 中已有一条 `inject.head` 的 `.slide-up{visibility:visible}` 覆盖样式，作用是与 vanilla-lazyload 配合、避免图片空白；隐藏交给 ScrollReveal 内联 `opacity` 负责。**不要**在样式表里设 `opacity:0`，否则 SR4 不生成动画终点。

### 参数调整

动画参数对齐参考站 xaoxuu.com/wiki（原本 500ms 太短、手机端不明显）：

| 参数 | 原值 | 新值 |
|---|---|---|
| duration | 500ms | **1000ms** |
| interval | 50ms | **100ms** |

（distance 仍为 8px，与 xaoxuu 一致）

### 涉及文件

- `_config.stellar.yml` —— 修改 `plugins.scrollreveal`（加入 `inject` + 调整参数）
- 主题源码文件**零改动**

### 上线方式

Vercel 部署（GitHub 仓库 `aliyah666/qinyuanStellar`，远端分支 `main`）：
```bash
hexo generate          # 本地构建验证
git add _config.stellar.yml
git commit -m "fix: ..."
git push origin main   # 触发 Vercel 自动构建部署
```
本次相关 commit：`877ea10`（修复注入）、`6ec1212`（调整参数）。

### 验证

- 本地：`hexo generate` 后检查 `public/index.html` 含注入标记（`sr-fallback`/`pinnedGroups`），且无旧的 `.l_main` 硬编码脚本；
- 线上：`curl -sL https://qinyuan.me/ | grep "duration:'1000'"` 确认已更新。

---

## 维护注意点（长期有效）

1. **`hexo clean` 偶发 `EBUSY: resource busy or locked, rmdir public`**：`public` 目录被某进程占用（如编辑器/资源管理器预览）。不影响 `hexo generate`，遇到时关闭占用程序即可。
2. **备份位置**：每次改动前的工作区备份位于
   `C:\Users\Administrator\Documents\lingxi-claw\<会话目录>\backup\`（`.bak` / `.inject-v1.bak`）。
3. **升级主题后的必做事项**：升级到 **1.36.0 及以上**时，官方已自带 ScrollReveal 修复，**必须删除 `_config.stellar.yml` 里的 `plugins.scrollreveal.inject` 配置**（否则会一直覆盖官方逻辑）。删除后重建并推送即可。
4. 主题当前为 npm 安装（`node_modules/hexo-theme-stellar`），升级命令：`npm i hexo-theme-stellar@latest`；构建环境 Node 版本由根目录 `.nvmrc` 锁定为 20.x（Vercel 自动读取，**勿选 Node 22**）。
