export const success = (data = [], msg) => ({
    success: true,
    data: data,
    message: msg
})

export const fail = (msg, error) => ({
    success: false,
    message: msg,
    error: error
})