<template lang="pug">
div.panel
  h3| timepicker (几点几分几秒)
  div.margin-10
    r-timepicker(
      v-model="time",
      placeholder="选择起飞时间",
      clearable,
      format="a",
      :disabled-hours="[1,4,7]",
      :disabled-minutes="[2,5,8]",
      :disabled-seconds="[3,6,9]",
    )
  
  h3| timepicker (几点几分)
  div.margin-10
    r-timepicker(
      v-model="time2",
      placeholder="选择起飞时间",
      clearable,
      format="b",
      :disabled-hours="[1,4,7]",
      :disabled-minutes="[2,5,8]",
      :disabled-seconds="[3,6,9]",
    )
  
  h3| timepicker (几分几秒)
  div.margin-10
    r-timepicker(
      v-model="time3",
      placeholder="选择起飞时间",
      clearable,
      format="c",
      :disabled-hours="[1,4,7]",
      :disabled-minutes="[2,5,8]",
      :disabled-seconds="[3,6,9]",
      size="small"
    )
</template>

<script>
export default {
  data () {
    return {
      time: '05:30:00',
      time2: '06:35',
      time3: '08:59',
    }
  }
}
</script>
