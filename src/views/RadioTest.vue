<template lang="pug">
div
  div.panel
    h3| radio
    div.margin-10
      r-radio(v-model="sex", label="男", :value="1")
      r-radio(v-model="sex", label="女", :value="0", disabled)
      r-radio(v-model="sex", label="其他", :value="2")
      r-radio(v-model="sex", label="其他2", :value="3", disabled)
      
      div| {{sex}}
  
  div.panel
    h3| radio 自定义内容
    div.margin-10
      r-radio-group(v-model="sex")
        r-radio(label="男", :value="1")
          r-icon(type="man")
          span| 男

        r-radio(label="女", :value="0")
          r-icon(type="woman")
          span| 女

        div| {{sex}}
  
  div.panel
    h3| radio-group
    div.margin-10
      r-radio-group(v-model="sex")
        r-radio(label="男", :value="1")
        r-radio(label="女", :value="0")

        div| {{sex}}
  
  div.panel
    h3| radio-group-vertical
    div.margin-10
      r-radio-group(v-model="sex", vertical)
        r-radio(label="男", :value="1")
          r-icon(type="man")
          span| 男

        r-radio(label="女", :value="0")
          r-icon(type="woman")
          span| 女

        div| {{sex}}
  
  .panel
    r-radio(:value="1", v-model="sex")
    r-radio(:value="0", v-model="sex")
</template>

<script>
export default {
  data () {
    return {
      sex: 0,
    }
  }
}
</script>
