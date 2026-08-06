# 覃远的思想杂货店 —— Stellar (Hexo) 博客

纯静态博客工程，基于 [Hexo](https://hexo.io/zh-cn/) + [Stellar 主题](https://github.com/xaoxuu/hexo-theme-stellar)。
内容用 Markdown 写在 `source/_posts/`，不依赖任何第三方 API，构建确定性、稳定。

---

## 部署到 Vercel（推荐，复用你现有的 Vercel 账号和 qinyuan.me 域名）

### 1. 推到 GitHub
```bash
cd qinyuan-blog
git init
git add .
git commit -m "init stellar blog"
git branch -m main
git remote add origin git@github.com:<你的用户名>/qinyuan-blog.git
git push -u origin main
```

### 2. 在 Vercel 导入
1. Vercel 控制台 → **Add New → Project** → 导入上面的 GitHub 仓库。
2. 框架不用特意选，**关键三项**填（或让 Vercel 自动识别 Hexo）：
   - **Build Command**：`hexo generate`
   - **Output Directory**：`public`
   - **Node Version**：选 **20.x**（Hexo 在 Node 20 最稳；**不要选 Vercel 默认的更高版本如 22，否则 hexo 可能不兼容**。本项目已用根目录 `.nvmrc` 锁定 Node 20，Vercel 导入时会自动读取生效）
3. 点 Deploy，等构建完成会得到 `xxx.vercel.app` 临时域名。

### 3. 绑定 qinyuan.me 域名
你现在的 qinyuan.me 已经在 Vercel 上了，两个做法二选一：
- **做法 A（推荐）**：在新项目里 → **Settings → Domains → Add** 输入 `qinyuan.me`，
  然后回到旧 NotionNext 项目把它解绑；或直接在旧项目里把 Git 仓库换成这个新仓库。
- **做法 B**：直接把旧项目的 Repository 改成这个新仓库（Settings → Git → 断开并重连）。

DNS 不用动（之前已经指向 Vercel 了），绑定后几分钟生效。

---

## 本地预览
```bash
npm install
npm run server   # 默认 http://localhost:4000
```

## 写一篇新文章
在 `source/_posts/` 新建 `xxx.md`，头部加 front-matter（见 `hello-world.md`），推送即上线。

## 从 Notion 迁移旧文章
Notion 里每篇文章 → 右上角 `···` → **Export** → 选 **Markdown & CSV**，
导出后把 `.md` 文件丢进 `source/_posts/` 即可。
注意：Notion 导出的图片是链接或本地附件，需按需处理图片路径。
