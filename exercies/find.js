const find = (list, predicate) => {
  for (let i = 0; i < list.length; ++i) {
    const item = list[i]
    if (predicate(item)) {
      return item
    }
  }
  return null
}
