---
title: 你好，世界
date: 2026-08-05 23:00:00
tags: [随笔]
categories: [生活]
---

这是用 **Stellar** 主题（Hexo）搭建的第一篇文章。

Stellar 是纯静态博客方案：文章就是本地 Markdown 文件，随 Git 仓库走，构建时由 Hexo 生成静态 HTML。
**完全不依赖 Notion API / token**，所以不会再出现之前那种「Notion 抽风导致整站空掉」的事故。

## 怎么写新文章

在 `source/_posts/` 目录下新建一个 `.md` 文件，头部加上 front-matter：

```markdown
---
title: 文章标题
date: 2026-08-05 23:00:00
tags: [标签1, 标签2]
categories: [分类]
---

正文用 Markdown 写……
```

推送到 GitHub，Vercel 会自动重新构建并上线。

> 把你 Notion 里已有的文章导出成 Markdown，放进 `source/_posts/` 即可完成迁移。
