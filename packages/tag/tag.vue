<style src="./tag.scss" lang="scss"></style>

<script>
import jsx from '../../src/utils/jsx'

var {div, span, rIcon} = jsx

var Tag = {
  name: 'RTag',
  props: {
    closeable: Boolean,
    // 枚举，可选值
    // primary、success、info、warning、danger
    type: {
      type: String,
      default: 'info',
    },
    name: [String, Number],
    size: String,
    disabled: Boolean,
  },
  computed: {
    cls () {
      var cls = []
      cls.push('r-tag')

      cls.push('r-tag-' + this.type)

      if (this.size === 'small'){
        cls.push('r-tag-small')
      }

      if (this.disabled){
        cls.push('r-tag-disabled')
      }

      return cls
    },
  },
  render (h) {
    jsx.h = h
    var me = this

    return div('.' + this.cls.join('+'),
      span('.r-tag-text', ...(this.$slots.default || []) ),

      rIcon({
        vif: !!this.closeable,
        p_type: 'ios-close-empty',
        no_click (e) {
          if (me.disabled){
            return
          }
          me.$emit('close', e, me.name)
        }
      })
    )
  }
}

export default Tag
</script>