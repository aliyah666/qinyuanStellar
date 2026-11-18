# CHANGELOG

qinyuan.me 博客维护日志（最新在上）。备份：`C:\Users\Administrator\Documents\lingxi-claw\*\backup\`。

## 2026-11-18 · 新增「勋章」页（表扬档案）

- **新页面**：`source/praise/index.md` → `/praise/`，Austin Kleon《像艺术家一样偷师》第 8 章的「表扬档案」实践页（`menu_id: praise`、`comments: false`）。
- **布局**：CSS Grid 两列整齐网格（`repeat(2, minmax(0, 1fr))`，图片统一 16:9 顶部对齐裁切、行行等高）；`polaroid-card--wide` 修饰类可让长截图横跨整行（21:9）；≤520px 降为单列。拍立得相框卡片，全部使用主题变量 `--card` / `--text-p1` / `--text-p3` / `--block-border`，深浅色自适应。
- **灯箱**：卡片图片带 `data-fancybox="praise"`，命中主题默认选择器 `[data-fancybox]:not(.error)`，无需改 `plugins.fancybox.selector`。
- **导航**：`_config.stellar.yml` → `menubar.columns: 3 → 4`，新增 `id: praise`「勋章」项（四格一行，追加在「关于」之后）。
- **样式落点**：样式写在页面 front-matter 的 `inject.head`（与 about 页一致），不动主题源码。
- **约束**：卡片内文字是原始 HTML、不解析 Markdown；卡片内部禁止空行、缩进须 ≤3 空格，否则渲染成代码块（文件末尾已附卡片模板注释）。

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
5. **改 `_config.stellar.yml` 的 `menubar.columns` 等主题编译期变量后，必须 `hexo clean` 再构建**：`css/main.css` 走 `db.json` 缓存，直接 `hexo generate` 不会重编，导航会出现「三格一行 + 一格换行」的假故障。
6. 部署：`hexo generate` → `git push origin main`（Vercel 自动构建，远端 `aliyah666/qinyuanStellar`）。
