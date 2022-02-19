---
nav:
  title: 基础
  path: /base
group:
  title: 概述
  order: 1
---

# 概述

> A personal React UI Toolkit.

## ✨ 预期定位
- 📦 开箱即用的高质量 `React` 组件。
- 🛡 使用 `TypeScript` 开发，提供完整的类型定义文件。
- ⚙️ 支持组件样式按需引入。

## 📦 安装
```shell
npm install hiller-design --save
```
```shell
yarn add hiller-design
```

## 🔨 示例
```ts
import { Alert } from 'hiller-design';

const App = () => {
  return (
    <Alert />
  );
}

export default App;
```
引入样式
```ts
import 'hiller-design/dist/index.css';
```

## ✨ 组件

- [x] Alert 
- [ ] Button

## ⌨️ 本地开发
```shell
git clone https://github.com/hua-bang/hiller-design.git

cd hiller-design

npm install
```