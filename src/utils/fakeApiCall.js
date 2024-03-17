export const fakeApiCall = (mock) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mock)
        }, 2000)
    })
}