// 封装防抖函数
export function debounce (fun, delay = 300) {
  let timer = null
  const _this = this
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fun.apply(_this, args)
    }, delay)
  }
}
