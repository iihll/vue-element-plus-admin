// import { createTypes, toType, VueTypesInterface, VueTypeValidableDef } from 'vue-types'
// import { CSSProperties } from 'vue'
import { createTypes, toType } from 'vue-types'

// 自定义扩展vue-types
// type PropTypes = VueTypesInterface & {
//   readonly style: VueTypeValidableDef<CSSProperties>
// }

// const propTypes = createTypes()

// 需要自定义扩展的类型
// see: https://dwightjack.github.io/vue-types/advanced/extending-vue-types.html#the-extend-method
// propTypes.extend([
//   {
//     name: 'style',
//     getter: true,
//     type: [String, Object],
//     default: undefined
//   }
// ])
class propTypes extends createTypes() {
  static get style() {
    return toType('style', {
      type: [String, Object],
      default: undefined
    })
  }
}

export { propTypes }
