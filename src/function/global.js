export const isnull = (value) => value === null
export const isUndefined = (value) => value === undefined
export const isEmptyString = (value) => value === ''
export const isSomeInvalidValue = (value) => isnull(value) || isUndefined(value) || isEmptyString(value)