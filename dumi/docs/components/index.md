---
nav:
  title: 概述
  path: /base
group:
  title: 概述
  order: 1
---

# Hiller-Design

`Hiller-Design` 是一个轻便的 `React UI` 组件库，主要用于研发企业级中后台产品。

## Component Demo

```tsx
import React from 'react';
import { Alert } from 'hiller-design';
import 'hiller-design/dist/index.css';

const App = () => {
  return (
    <>
      <Alert>Hiller Design</Alert>
      <br />
      <Alert kind="warning" style={{ color: "red" }}>
        Hiller Design
      </Alert>
    </>
  );
}

export default App;
```
