const generateKey = (group: string): string => {
  return `${group}_${new Date().getTime()}`
}

export default generateKey
