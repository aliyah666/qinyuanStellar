'use strict';

/**
 * 把文章的 cover 自动同步为分享图（og:image）
 *
 * 背景：Stellar 1.33.1 的 head.ejs 里 og:image 恒取 config.avatar，
 *      front-matter 的 cover 只参与 twitter:card 判断，不会成为分享缩略图。
 *
 * 规则：
 *   1. 文章已显式写 open_graph.image → 原样尊重，不覆盖
 *   2. 有 cover 但未写 open_graph.image → 用 cover
 *   3. 两者都没有 → 不动，保持主题默认（站点 avatar）
 *
 * 格式：腾讯 COS 数据万象的 format/webp 替换为 format/jpg，
 *      微信抓图对 webp 兼容性不稳定，jpg 最稳妥。
 *
 * 说明：必须用 template_locals 钩子。before_generate 阶段改 post 对象
 *      不会被模板渲染时重新读取，产物不会变。
 */

const WEBP_FLAG = 'imageMogr2/format/webp';
const JPG_FLAG = 'imageMogr2/format/jpg';

function shareFriendly(url) {
  if (typeof url !== 'string' || url.length === 0) return url;
  if (url.indexOf(WEBP_FLAG) !== -1) return url.replace(WEBP_FLAG, JPG_FLAG);
  return url;
}

hexo.extend.filter.register('template_locals', function (locals) {
  const page = locals.page;
  if (!page) return locals;
  if (!page.cover) return locals;

  const og = page.open_graph || {};
  if (og.image) return locals;

  // 只处理文章页，避免影响首页/归档等聚合页
  if (page.layout !== 'post') return locals;

  page.open_graph = Object.assign({}, og, { image: shareFriendly(page.cover) });
  return locals;
});
