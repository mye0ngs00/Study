const pad = (number: number | string, digit: number): number | string => {
  let ret = number
  if (number.toString().length < digit) ret = '0'.repeat(digit - 1) + number
  return ret
}

export default pad
