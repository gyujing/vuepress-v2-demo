---
lang: zh-CN
title: 语法扩展
description: 页面的描述
---
# 语法扩展
## 表格
### 普通表格

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

### 对齐效果

| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |


## 链接

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 

## 表情

VuePress 2 已经发布 :tada: ！


## 目录

[[toc]]



## 代码块
### 行高亮

```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

### 行号
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

### 添加 v-pre
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```

### 导入代码块
<!-- 最简单的语法 -->
@[code](../.vuepress/config.ts)
<!-- 仅导入第 1 行至第 5 行 -->
@[code{1-5}](../.vuepress/config.ts)
<!-- 指定代码语言 -->
@[code ts](../.vuepress/config.ts)
<!-- 行高亮 -->
@[code ts{2,4-5}](../.vuepress/config.ts)
<!-- 仅导入第 1 行至第 5 行\行高亮 -->
@[code{1-10} ts{2,4-5}](../.vuepress/config.ts)


@[code ts{2,4-5}](@vuepress/config.ts)

## 在 Markdown 中使用 Vue

### 模板语法

一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

### 内置组件

这是默认主题内置的 `<Badge />` 组件 <Badge text="演示" />
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />

<CodeGroup>
  <CodeGroupItem title="PNPM">

```bash:no-line-numbers
pnpm install
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash:no-line-numbers
yarn install
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM" active>

```bash:no-line-numbers
npm install
```

  </CodeGroupItem>
</CodeGroup>
