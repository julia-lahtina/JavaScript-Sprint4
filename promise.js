let promise = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpSatus >= 200 && response.httpSatus < 400) {
            resolve(response.data)
            console.log('2', promise)
        } else {
            reject(response.error)
        }
    }, 2000, {httpSatus: 200, data: {userName: 'Dima', id: '4546456', status: 'active'}, error: {}})
})

console.log('1', promise)