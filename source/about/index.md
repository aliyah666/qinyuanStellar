---
title: 关于我
layout: page
banner: 'https://img.qinyuan.me/images/20260823140050351.jpg?imageMogr2/format/webp/quality/85'
inject:
  head:
    # 仅本页生效：解除 button 标签插件的文字选中限制（主题 a.button 设了 user-select:none），样式不变，仅允许选中文字以便复制，不引入 copy 组件
    - |
      <style>
      a.button { user-select: text; -webkit-user-select: text; }
      </style>
---

你好，我是 Hardy，坐标广西梧州。

在锦江酒店旗下做了 {% mark 6 年 color:orange %}，从基层服务员一路做到{% mark 店长 color:green %}，独立操盘过 2 家门店，也拿到了锦江酒店店总认证。目前待业，正在寻找新的机会。

业余时间折腾 AI、探索自媒体，也在这里记下自己的所思所想——AI、工作、生活、阅读，随手写，想到哪写到哪。

## 关于这个博客

这个博客是我用 AI 工具协助搭建的：

- 框架：{% hashtag Hexo https://hexo.io/ color:blue %} + {% hashtag Stellar https://xaoxuu.com/wiki/stellar/ color:blue %} 主题
- 代码托管在 {% hashtag GitHub https://github.com/ color:cyan %}，使用 {% hashtag Vercel https://vercel.com/ color:cyan %} 部署
- 用优选 IP 加速，保证国内访问速度
- 评论系统：{% hashtag Twikoo https://twikoo.js.org/ color:blue %}
- 说说功能：{% hashtag Qexo https://oplog.cn/qexo/ color:cyan %} 插件

{% note color:green 感谢以上所有工具的开源作者，让我得以免费使用。 %}

## 找到我

- 邮箱：{% button me@qinyuan.me javascript:void(0) icon:✉ color:blue %}
- 个人博客：{% button qinyuan.me javascript:void(0) icon:solar:planet-bold-duotone color:green %}
