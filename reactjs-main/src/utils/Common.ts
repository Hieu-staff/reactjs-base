const convertPrice = (price?: number) => {
  if (price !== undefined) {
    return price.toLocaleString('en-US')
  }
  return '0'
}

export default {
  convertPrice
}
