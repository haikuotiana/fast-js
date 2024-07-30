---
title: defaultDate - 默认日期区间
nav:
  title: 使用文档
  path: /lib
group:
  path: /format
  title: 数据结构相关
  order: 7
---

## defaultDate

> 开箱即用的时间格式化工具

Demo:

```tsx | pure
import { defaultDate } from 'fast-utiljs';

defaultDate('currentMonth','-'); //当月1日-当前日期区间

defaultDate('threeMonth','/'); //近三个月日期区间

defaultDate('aYear',''); //近一年日期区间
```
