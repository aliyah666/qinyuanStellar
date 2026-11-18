---
title: 表扬档案
subtitle: 留着它，只在需要提振士气的时候拿出来看；看两眼，然后回去干活。
layout: page
menu_id: praise
comments: false
description: 收集他人对自己的真诚肯定与高光时刻，作为客观证据，在自我怀疑与低谷期快速提振士气。
inject:
  head:
    # 仅本页生效：拍立得相框 + 两列整齐网格（统一 16:9 裁切，长图可整行横跨），跟随主题深浅色自适应
    - |
      <style>
      .polaroid-wall {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
        margin-top: 1.5rem;
      }
      .polaroid-card {
        display: flex;
        flex-direction: column;
        min-width: 0;
        padding: 10px 10px 14px 10px;
        background: var(--card, #ffffff);
        border: 1px solid var(--block-border, rgba(0, 0, 0, 0.08));
        border-radius: 12px;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
        box-sizing: border-box;
      }
      .polaroid-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.09);
      }
      .polaroid-frame {
        width: 100%;
        aspect-ratio: 16 / 9;
        overflow: hidden;
        border-radius: 8px;
        background: rgba(125, 125, 125, 0.05);
      }
      .polaroid-frame img {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
        object-position: top center;
        transition: transform 0.3s ease;
      }
      .polaroid-card:hover .polaroid-frame img {
        transform: scale(1.02);
      }
      .polaroid-card--wide {
        grid-column: span 2;
      }
      .polaroid-card--wide .polaroid-frame {
        aspect-ratio: 21 / 9;
      }
      .polaroid-card--portrait .polaroid-frame {
        aspect-ratio: 707 / 1000;
      }
      /* 与 --wide 叠加时生效，必须写在 --wide 之后 */
      .polaroid-card--landscape .polaroid-frame {
        aspect-ratio: 4 / 3;
      }
      .polaroid-caption {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
        padding: 0 4px;
        font-size: 0.88rem;
        line-height: 1.5;
        color: var(--text-p1, #333333);
        text-align: left;
      }
      .polaroid-date {
        margin-top: 6px;
        font-size: 0.75rem;
        color: var(--text-p3, #888888);
        align-self: flex-end;
      }
      /* 移动端覆盖必须放在最后：同优先级下靠后生效 */
      @media (max-width: 520px) {
        .polaroid-wall {
          grid-template-columns: minmax(0, 1fr);
          gap: 14px;
        }
        .polaroid-card--wide {
          grid-column: span 1;
        }
        .polaroid-card--wide:not(.polaroid-card--landscape) .polaroid-frame {
          aspect-ratio: 16 / 9;
        }
      }
      </style>
---

> “与其在负能量的阴霾之下苦苦挣扎，不如创建一个「点赞」收藏夹。在自己需要鼓励的时候拿出来看看。” —— 奥斯汀·克莱恩（Austin Kleon）

<div class="polaroid-wall">

  <div class="polaroid-card polaroid-card--portrait">
    <div class="polaroid-frame">
      <img src="https://img.qinyuan.me/images/20261119001708294.jpg?imageMogr2/format/webp/quality/85" alt="锦江酒店全品牌副总认证证书" data-fancybox="praise" loading="lazy">
    </div>
    <div class="polaroid-caption">
      通过锦江酒店全品牌副总认证。
      <span class="polaroid-date">2023.12</span>
    </div>
  </div>

  <div class="polaroid-card polaroid-card--portrait">
    <div class="polaroid-frame">
      <img src="https://img.qinyuan.me/images/20261119001644860.jpg?imageMogr2/format/webp/quality/85" alt="锦江酒店简约品牌直营店总证书" data-fancybox="praise" loading="lazy">
    </div>
    <div class="polaroid-caption">
      拿下了锦江酒店简约品牌直营店总证。
      <span class="polaroid-date">2022.09</span>
    </div>
  </div>

  <div class="polaroid-card polaroid-card--wide polaroid-card--landscape">
    <div class="polaroid-frame">
      <img src="https://img.qinyuan.me/images/20261119001721528.jpg?imageMogr2/format/webp/quality/85" alt="二〇二〇年度先进工作者荣誉证书" data-fancybox="praise" loading="lazy">
    </div>
    <div class="polaroid-caption">
      初入酒店业的第二年，获评年度优秀员工。也是毕业工作以来第一次正儿八经的获奖。
      <span class="polaroid-date">2021.02</span>
    </div>
  </div>

</div>

<!--
卡片模板（新增时复制下面整段，替换图片地址、说明文字与日期）：

普通卡片——图片按 16:9 裁切（顶部对齐），一行两张、行行等高：

<div class="polaroid-card">
  <div class="polaroid-frame">
    <img src="https://img.qinyuan.me/images/example.jpg?imageMogr2/format/webp/quality/85" alt="图片说明" data-fancybox="praise" loading="lazy">
  </div>
  <div class="polaroid-caption">
    这里只能写纯文本，需要强调请用 <strong>HTML 标签</strong>，不会解析 Markdown 语法。
    <span class="polaroid-date">2026.11</span>
  </div>
</div>

竖版卡片——证书、证书类竖图、手机截图用，加 polaroid-card--portrait，按 707:1000（约 A4）裁切，两张同行也能对齐：

<div class="polaroid-card polaroid-card--portrait">
  <div class="polaroid-frame">
    <img src="/images/praise/example.jpg" alt="图片说明" data-fancybox="praise" loading="lazy">
  </div>
  <div class="polaroid-caption">
    竖版图说明。
    <span class="polaroid-date">2026.11</span>
  </div>
</div>

整行卡片——长截图或重点内容用，加一个 polaroid-card--wide 类名，按 21:9 裁切、横跨一整行：

<div class="polaroid-card polaroid-card--wide">
  <div class="polaroid-frame">
    <img src="https://img.qinyuan.me/images/example-wide.jpg?imageMogr2/format/webp/quality/85" alt="长截图说明" data-fancybox="praise" loading="lazy">
  </div>
  <div class="polaroid-caption">
    竖版长截图放这里，点开可看完整内容。
    <span class="polaroid-date">2026.11</span>
  </div>
</div>

注意 1：卡片内部不要留空行，且每行缩进不得超过 3 个空格，否则会被渲染成代码块。
注意 2：整行卡片（polaroid-card--wide）前面必须已经有偶数张普通卡片，否则它前面会空出一个格子。想插在奇数位置时，把上一张也改成整行卡片即可。
-->
