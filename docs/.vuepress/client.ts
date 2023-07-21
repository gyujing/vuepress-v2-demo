import { defineClientConfig,usePagesData } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    const pagesData = usePagesData();
    // console.log("pagesData:",pagesData)
    // console.log("Object.keys:",Object.keys(pagesData.value))
    // console.log("values[key]",pagesData.value['v-8daa1a0e']?.())
    // 1、Object.keys(pagesData.value)返回对象数组keys值
    // 2、map(key => pagesData.value[key]?.()
    // 解释：将keys值map，获取对象值，由于对象值是promise方法，所有加（）
    // 3、Promise.all
    // 返回两个promise返回的值，按数组显示
    Promise.all(Object.keys(pagesData.value).map(key => pagesData.value[key]?.())).then(pages=>{
      console.log(pages)
      app.provide("pages",pages)
    })
    // router.beforeEach()
  },
  setup() {
   console.log("vuepress setup")
  },
  rootComponents: [],
})
