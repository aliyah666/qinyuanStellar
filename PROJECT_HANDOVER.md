# 博客项目架构与 AI 协作交接清单

> **版本**：V1.1 ｜ **最近更新**：2026-08-11
> **读者定位**：本清单供**接手项目的 AI 与未来协作者**阅读，作为项目结构索引，帮助快速了解项目全貌；**不承载任何执行规则**。执行规则一律以 `AI_RULES.md` 为准。

## 一、 项目基本信息与目的
- **项目类型**：个人静态博客系统
- **技术栈**：Hexo 框架 + Stellar 主题 + Twikoo 评论系统 + 本地搜索
- **托管与部署**：GitHub 仓库 + Vercel 自动构建部署
- **项目目的**：协助作者将“非结构化原始文字草稿”高效、优雅地转换为符合 Stellar 美学规范的博文，并自动化发布。

---

## 二、 与 AI_RULES.md 的协作关系（核心定位）
本项目由两份配套文档共同驱动，职责严格分离：
- **AI_RULES.md（最高规则）**：承载排版规范、四阶段 SOP、Git 提交与防错红线的**全部执行规则**。AI 的一切操作以它为准。
- **本清单 PROJECT_HANDOVER.md（项目索引）**：仅提供文件架构地图与结构说明，帮助 AI 快速定位项目全貌，**不承载任何执行规则**。

**使用顺序**：AI 接到任务时，先读本清单了解项目结构，再严格按 AI_RULES.md 的流程执行；两文档若发生冲突，一律以 AI_RULES.md 为准（其第五章定义了规则冲突优先级）。

---

## 三、 核心文件架构地图

```text
blog-root/                       # 博客根目录
├── AI_RULES.md                  # 【最高规则】AI 排版、SOP 与 Git 提交全量守则
├── PROJECT_HANDOVER.md          # 【项目索引】本交接清单（文件地图与目的说明）
├── README.md                    # 项目说明文档
├── CHANGELOG.md                 # 更新日志
├── _config.yml                  # Hexo 框架基础配置文件
├── _config.stellar.yml          # Stellar 主题核心配置（含 Twikoo、本地搜索等）
├── package.json                 # 依赖与构建脚本（npm run build/clean/server）
├── vercel.json                  # Vercel 部署配置（缓存 headers）
├── .nvmrc                       # Node 版本锁定（Node 20）
├── .gitignore                   # 忽略 node_modules/、public/、db.json、*.log 等
├── node_modules/                # 依赖目录（Stellar 主题以 npm 依赖安装于此，非 themes/）【AI 严禁修改】
├── public/                      # hexo generate 生成产物，可重新生成、不纳入 Git 提交【勿手动编辑】
├── db.json                      # Hexo 数据库缓存，可重新生成、不纳入 Git 提交
└── source/                      # 博客核心内容资产目录
    ├── _posts/                  # 正式发布的 Markdown 文章存储库（现有 5 篇）【AI 常规接触面】
    ├── images/                  # 本地图片、SVG 矢量图与架构图存储库【AI 常规接触面】
    ├── about/                   # 关于页（index.md）
    ├── robots.txt               # 爬虫协议
    └── _data/                   # 自定义数据目录（当前未创建，需要时再新建）
```

**只读禁区**：`node_modules/`、`public/`、`db.json` 为生成物或依赖，AI 不得修改（详见 AI_RULES.md 红线第 1 条）。
**常规接触面**：普通博文任务只改动 `source/_posts/` 与 `source/images/`，其余为稳定配置，非必要不改动。

---

## 四、 关键操作命令

| 命令 | 作用 |
|------|------|
| `npm run build`（= hexo generate） | 构建站点、生成 `public/`（AI_RULES 阶段三 HK-3 本地验证用） |
| `npm run clean`（= hexo clean） | 清理 `public/` 与缓存后重建 |
| `npm run server`（= hexo server） | 本地预览；本项目实际使用 3456 端口：`npm run server -- -p 3456` → http://localhost:3456/ |
| `git status --short` | 查看变动文件（阶段三 Smart Git 用） |

**Node 版本**：`.nvmrc` 指定 **Node 20**（`package.json` engines 要求 `>=18 <=20`）。

---

## 五、 草稿与发布约定
- **原始草稿**：作者临时放置在**博客根目录**下的 `.md` 文件（如 `[草稿.md]`），未排版、未结构化。
- **处理流程**：AI 按 AI_RULES.md 的四阶段流水线处理（阶段〇 批注式优化 → 阶段一 结构化 → 阶段二 Stellar 润色 → 阶段三 Git 提交）。
- **发布目标**：最终文章写入 `source/_posts/`。
- **图片素材**：文中引用的图片统一放入 `source/images/`，图片缺失时须按 AI_RULES.md 规则追加警告注释。

---

## 六、 发布数据流

```text
草稿.md → 阶段〇 批注式优化 → 阶段一 结构化 → 阶段二 Stellar 润色
        → 写入 source/_posts/ → npm run build 生成 public/
        → git push → Vercel 检测变更并自动构建 → 上线
```

---

## 七、 维护约定与异常兜底
- 每当项目结构发生变化（新增/删除目录或关键文件），必须**同步更新**本文档的“核心文件架构地图”，保持与实际一致。
- 本清单仅描述结构与定位，**不承载执行规则**；执行规则一律维护在 AI_RULES.md，避免两份文档规则冲突。
- **异常兜底**：当 AI 发现实际结构与本文档不符、或路径不明确时，一律停止并询问用户，不得自行猜测或擅动。
