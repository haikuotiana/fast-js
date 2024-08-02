# fast-utiljs

一款面向复杂业务场景的 js 类库, 目前已支持:

- parser json 解析器, 在原生 json api 基础上支持序列化和反序列化函数, 正则等
- store 一款支持设置过期时间且支持回调的本地缓存库, 基于 localStorage 二次封装
- formatDate 支持自定义的时间格式化函数
- defaultDate 获取默认日期区间
- obj2url 将对象转换成编码后的 url 字符串
- url2obj 将 url 字符串转换成对象
- isPc 判断设备是否为 pc 端类型
- debounce 防抖函数
- throttle 节流函数
- randomStr 生成指定个数随机字符串的函数
- uuid 生成唯一 id
- shuffle 数组乱序, 洗牌算法
- randomStr 生成随机字符串
- transformTree 将扁平数组转换成树结构

等等开发中常用的工具函数, 轻松提高业务研发效率.

## 全部函数列表

- 浏览器相关
  - getRuntimeEnv - 获取运行环境
  - getSelection - 获取选中文本
  - redirect - 重定向
  - store - 本地存储库
- 字符串操作
  - base64 - base64编码和解码
  - camelize - 横线转驼峰命名
  - charCount - 获取字符数
  - formatNumber - 数值千分位格式化
  - formatPercent - 值转换为百分数表示
  - hyCompact - 紧凑型驼峰命名转换
  - hyphenate - 驼峰命名转横线命名
  - randomStr - 生成随机字符串
  - repeat - 生成重复字符串
  - uuid - 生成唯一id
- 常用判断函数
  - isArray - 判断数组类型
  - isEmpty - 判断空对象
  - isPc - 判断设备类型
  - isPhone - 判断手机号格式
  - isEmail - 判断邮箱函数
  - isIdCard - 判断身份证格式函数
  - lang - 判断中英文
  - regexp - 常用正则表达式
  - dataDesensitization - 数据脱敏
- 数据结构相关
  - cloneDeep - 数据深拷贝
  - arrayToListNode - 数组转成链表
  - linkListToArray - 链表结构转数组结构
  - dateCalculate - 日期计算
  - timeCutStr - 计算时间差
  - timeSub - 计算时间间隔
  - transformArray - 树结构转扁平数组
  - formatDate - 时间格式化
  - defaultDate - 默认日期区间
  - getRawType - 获取数据类型
  - obj2url - 将对象参数解析为url字符串
  - transformTree - 扁平转树结构
  - url2obj - url字符串转对象  
  - bothLinkedList - 双向链表
- 图片处理函数
  - compressImg - 自定义压缩图片函数
  - file2img - 文件转图片对象
  - hex2rgba - hex色值转rgba
  - rgba2obj - 将rgba值转化为rgba对象
  - genRandomColor - 获取随机颜色
- js高级函数
  - debounce - 防抖函数
  - parser - json超级解析器
  - sleep - 睡眠函数
  - throttle - 节流函数
- 常用算法和数据结构
  - bubbleSort - 冒泡排序
  - quickSort - 快速排序
- 数学计算
  - average - 计算数组平均值
  - difference - 创建一个排除指定项的数组
  - random - 返回区域内随机数
  - shuffle - 打乱数组
  - factorial - 阶乘
  - fibonacci - 计算斐波那契数
  - sum - 求和数组
- 几何计算
  - coordinatesInCircle - 生成圆内任意坐标
  - coordinatesInRect - 生成矩形内任意坐标
  - judgePointInCircle - 判断一点是否在圆内
- dom操作
  - downloadFileWithText - 下载文本文件
  - downloadFileWithUrl - 下载链接文件
  - $ - 通过id,class等获取dom
  - getDomPageXY - 获取dom元素在当前文档中的绝对位置
  - getDomScreenXY - 获取dom元素相对于screen绝对位置
  - getDomText - 获取文本内容
  - xss - 转义html标签

## API Doc

[fast-utiljs 文档](https://haikuotiana.github.io/fast-utiljs)
