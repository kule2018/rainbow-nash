<template lang="pug">
div(style="padding: 20px; background-color: #fff")
  r-card(
    title="你好"
  )
    p(slot="title")
      | 标准卡片哈哈哈哈哈
    
    a(href="#", slot="extra")
      r-button-group(size="small")
        r-button| 你好
        r-button| 再见
    
    r-card(
      title="标准卡片"
    ) 
      a(href="#", slot="extra")
        r-icon(type="ios-loop-strong")
        span(style="vertical-align: middle;")| 换一换
      
      p| 卡片内容
      p| 卡片内容
      p| 卡片内容
  

  r-card(
    title="你好"
  )
    p(slot="title")
      | 标准卡片哈哈哈哈哈
    
    a(href="#", slot="extra")
      r-button-group(size="small")
        r-button| 你好
        r-button| 再见
    
    p| 你好呀

  r-card(
    title="你好"
  )
    p(slot="title")
      | 标准卡片哈哈哈哈哈
    
    a(href="#", slot="extra")
      r-button-group(size="small")
        r-button| 你好
        r-button| 再见
    
    p| hello, world ~

</template>
