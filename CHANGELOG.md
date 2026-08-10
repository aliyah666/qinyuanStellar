# CHANGELOG

> qinyuan.me 博客维护日志（最新在上）。备份见 `C:\Users\Administrator\Documents\lingxi-claw\*\backup\`。

## 2026-08-10 · 修复移动端 ScrollReveal 动画 + 调整参数

- **问题**：Stellar 1.33.1 移动端无滑入动画（PC 正常）。根因：主题默认 `scrollreveal.ejs` 硬编码 `.widgets/.l_main/.l_right` 三个容器，移动端单列布局下这些容器不产生滚动事件，动画不触发。官方 1.36.0 已修复。
- **方案（不升级）**：`_config.stellar.yml` → `plugins.scrollreveal.inject` 注入自包含脚本，整体绕过默认模板：
  1. 常规元素改用 `window` 滚动监听（PC/移动端均有效）；
  2. sticky/fixed 吸顶容器内元素按容器分组 reveal，避免误判不可见；
  3. 3 秒 watchdog + `sr-fallback` 兜底防白屏。
- **参数**：`duration 500→1000`、`interval 50→100`（对齐 xaoxuu，手机端更明显；distance 仍 8px）。
- **commit**：`877ea10`（修复）、`6ec1212`（参数）。主题源码零改动。

## 长期注意点

1. **1.33.1 无 `utils.initPlugin`/`utils.js`**（1.36+ 才有），不能照搬官方 1.37 脚本，须用自包含 JS。
2. **升级到 1.36+ 后必须删除 `plugins.scrollreveal.inject`**（官方已自带修复，否则一直覆盖）。
3. `inject.head` 已有 `.slide-up{visibility:visible}` 覆盖（配合懒加载）；**样式表不得设 `opacity:0`**（否则 SR 无动画终点）。
4. `hexo clean` 偶发 `EBUSY rmdir public`：public 被占用，不影响 generate，关闭占用程序即可。
5. 主题为 npm 安装；Node 版本由 `.nvmrc` 锁定 20（Vercel 勿选 22）。
6. 部署：`hexo generate` → `git push origin main`（Vercel 自动构建，远端 `aliyah666/qinyuanStellar`）。
