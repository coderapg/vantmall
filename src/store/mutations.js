import { SHOP_INFO } from './mutation-types'

export default {
  [SHOP_INFO] (state, { data, callback }) {
    state.shopInfo = data
    callback && callback()
  }
}
