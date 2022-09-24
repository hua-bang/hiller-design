---
nav:
  title: 概述
  path: /base
group:
  title: 组件
  order: 2
---

# Alert

> A personal React UI Toolkit.

## Demo
```tsx
import React from 'react';
import { Alert, Button } from 'hiller-design';
import 'hiller-design/dist/index.css';

export default () => {
  return (
    <div>
      <Alert kind="positive"/>
      <div style={{ marginTop: '10px' }}>
        <Alert />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Alert kind="negative">
          This is negative
        </Alert>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Alert kind="warning" />
      </div>
    </div>
  );
}
```