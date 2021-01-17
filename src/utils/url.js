export const pathToArray = (path = '') => path.split('/').filter(el => !!el)

export const arrayToPath = (arr = []) => `/${arr.join('/')}`
