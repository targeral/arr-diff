const isArray = Array.isArray
const clone = arr => arr.slice()

const diffArray = (one, two) => {
  if (!isArray(two)) {
    return clone(one)
  }

  let olen = one.length
  let tlen = two.length
  let idx = -1
  let arr = []

  while (++idx < olen) {
    let ele = one[idx]

    let hasEle = false
    for (let i = 0; i < tlen; i++) {
      let val = two[i]

      if (ele === val) {
        hasEle = true
        break
      }
    }

    if (hasEle === false) {
      arr.push(ele)
    }
  }

  return arr
}

const diff = (...rest) => {
  let arr = rest.shift()
  let len = rest.length
  let idx = 0
  console.log(arr, rest, len)
  while (idx++ < len) {
    arr = diffArray(arr, rest[idx - 1])
  }
  return arr
}

module.exports = diff
