import { defineUserConfig } from 'vuepress'
import { getDirname, path } from '@vuepress/utils'

const dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules','guide/*.md'],
  markdown:{
    code:{
      highlightLines:true, //高亮
      lineNumbers:2  //至少 4 行代码时才会启用行号
    },
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, './')),
    },
  }
})
