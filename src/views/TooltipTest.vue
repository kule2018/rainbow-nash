<template lang="pug">
div.panel(style="padding-left: 400px;")
  h3| tooltip
  div.margin-10
    r-tooltip(:content="tip", placement="bottom")
      r-button| bottom
    
  div.margin-10
    r-tooltip(:content="tip", placement="bottom-start")
      r-button| bottom-start
  
  div.margin-10
    r-tooltip(:content="tip", placement="bottom-end")
      r-button| bottom-end
  
  div.margin-10
    r-tooltip(:content="tip", placement="top")
      r-button| top
  
  div.margin-10
    r-tooltip(:content="tip", placement="top-start")
      r-button| top-start
    
  div.margin-10
    r-tooltip(:content="tip", placement="top-end")
      r-button| top-end
  
  div.margin-10
    r-tooltip(:content="tip", placement="left")
      r-button| left
  
  div.margin-10
    r-tooltip(:content="tip", placement="left-start")
      r-button| left-start
  
  div.margin-10
    r-tooltip(:content="tip", placement="left-end")
      r-button| left-end
    
  div.margin-10
    r-tooltip(:content="tip", placement="right")
      r-button| right
  
  div.margin-10
    r-tooltip(:content="tip", placement="right-start")
      r-button| right-start
      div(slot="content")
        |多行信息
        br
        |第二行信息
  
  div.margin-10
    r-tooltip(:content="tip", placement="right-end")
      div(slot="content")
        r-button-group(style="background:#fff; padding: 10px;")
          r-button| hello
          r-button| world
          r-button| bye bye
          r-button(type="primary")| gogogo~

      r-button(title="tip")| right-end
</template>

<script>
export default {
  data () {
    return {
      //- tip: '大望路商圈.五角场商圈.车公庙商圈.小白楼商圈.下瓦房商圈.百子湾商圈.建外SOHO商圈.虹口龙之梦商圈.岗厦商圈.华强北商圈.南山商圈.朝阳门商圈.工体商圈.望京北商圈.望京南商圈.德外商圈.方庄商圈.马家堡商圈.上地商圈.人民大学商圈.中关村商圈.宝山万达商圈.大华商圈.火车站商圈.近铁广场商圈.长寿路商圈.镇坪路商圈.八佰伴商圈.人民广场商圈.徐家汇商圈.宜山路商圈.东直门商圈.立水桥商圈.酒仙桥商圈.双井商圈.惠新商圈.北辰商圈.石厦商圈.北苑商圈.大宁商圈.CBD商圈.三元桥商圈.大屯商圈.space商圈.大悦商圈.常营商圈.石景山万达商圈.南楼商圈.金街商圈.SPACE·788商圈.卫戍商圈.北关商圈.世纪坛商圈.五路居商圈.朝青商圈.四惠商圈.通州万达商圈.西直门商圈'
      tip: 'abababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababaabababababababababababababababa'
    }
  },
}
</script>
