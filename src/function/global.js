export const isnull = (value) => value === null
export const isUndefined = (value) => value === undefined
export const isEmptyString = (value) => value === ''
export const isSomeInvalidValue = (value) => isnull(value) || isUndefined(value) || isEmptyString(value)

export const readmoreCutter = (text, useLength = 95, readmoreText = '...อ่านเพิ่มเติม') => 
    text.length > useLength ? text.slice(0, useLength) + readmoreText : text

export const getTotalPrice = (data) => data.reduce((a, b) => a + b.price*b.count, 0)