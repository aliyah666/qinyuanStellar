# CHANGELOG

qinyuan.me 博客维护日志（最新在上）。备份：`C:\Users\Administrator\Documents\lingxi-claw\*\backup\`。

## 2026-08-10 · 修复移动端 ScrollReveal 动画 + 调参

- **根因**：Stellar 1.33.1 默认 scrollreveal.ejs 硬编码容器 `.widgets/.l_main/.l_right`，移动端单列下无滚动事件，动画失效。
- **方案（不升级）**：`_config.stellar.yml` → `plugins.scrollreveal.inject` 注入自包含脚本（绕过默认模板）：常规元素用 `window` 监听；sticky/fixed 容器内元素分组 reveal；3s watchdog + `sr-fallback` 兜底。
- **参数**：`duration 500→1000`、`interval 50→100`（distance 8px）。
- **commit**：`877ea10` 修复、`6ec1212` 调参。主题源码零改动。

## 维护注意点

1. 升级到 Stellar 1.36+ 后**必须删除 `plugins.scrollreveal.inject`**（官方已自带修复）。
2. 1.33.1 无 `utils.initPlugin`/`utils.js`，**不能照搬官方 1.37 脚本**，须自包含写法。
3. 样式表**不得设 `.slide-up{opacity:0}`**（会破坏动画）；已有 `inject.head` 的 visibility 覆盖保留。
4. `hexo clean` 偶发 `EBUSY rmdir public`（public 被占用），不影响 generate。
5. 部署：`hexo generate` → `git push origin main`（Vercel 自动构建，远端 `aliyah666/qinyuanStellar`）。
