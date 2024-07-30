---
title: getUrlParams - 获取地址栏参数
nav:
  title: 使用文档
  path: /lib
group:
  path: /browser
  title: 浏览器相关
  order: 12
---

## getUrlParams

> 获取当前地址栏参数,getUrlParams(name) 获取对应name的值，默认获取参数对象（不传值的情况）

Demo:

```tsx | pure
import { getUrlParams } from 'fast-utiljs';
//例如 http://xxxx.com?name=zhangsan&age=12

const paramsAll = getUrlParams(); //获取地址参数对象 {name:"zhangsan",age:12}

const nameValue = getUrlParams(name); //获取地址参数对象 "zhangsan"

```
