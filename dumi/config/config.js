import { defineConfig } from 'dumi';
import path from 'path';

const isProductEnv = (process) => {
  return process.env.NODE_ENV === 'production';
};

const BASE_ALIAS = {
  '@style': '/SRC/style',
  '@components': '/src/components',
};

const DEVELOPMENT_ALIAS = {
  'hiller-design/dist/index.css': path.resolve(__dirname, '../../src/style/index.scss'),
  'hiller-design': path.resolve(__dirname, '../../src/'),
};

const aliasConfig = Object.assign({}, BASE_ALIAS, isProductEnv(process) ? {} : DEVELOPMENT_ALIAS ); 

const repo = 'hiller-design';

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
  sass: {},
  alias: aliasConfig
  // more config: https://d.umijs.org/config
});