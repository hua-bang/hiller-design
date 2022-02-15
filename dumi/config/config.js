import { defineConfig } from 'dumi';

const repo = 'Hiller-Design';

export default defineConfig({
  title: repo,
  favicon:
    'https://img.mrsingsing.com/react-guidebook-favicon.png',
  logo:
    'https://img.mrsingsing.com/react-guidebook-favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  locales: [['zh-CN', '中文']],
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/hua-bang/TypeScript_Note',
    },
  ],
  chainWebpack(memo) {
    memo.plugins.delete('copy');
  },
  sass: {}
  // more config: https://d.umijs.org/config
});