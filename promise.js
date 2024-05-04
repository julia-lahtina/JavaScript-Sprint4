/*let promise = new Promise((resolve, reject) => {
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

//----------------------------------------------------------------------------------------------------------------------
// то, что описано выше, недостаточно для получения данных, нам нужны методы промисов: then, catch, finally
// then - срабатывает тогда, когда у промиса меняется состояние с pending на resolved or rejected

promise
    .then(
        res => {
            console.log('res', res);
            // return 10; //--------------------------> вернется не 10, а НОВЫЙ ОБЪЕКТ ПРОМИСА в состоянии resolve, поэтому после then можем еще then прописать
        },
        () => {
        }
    )
    .then(res2 => {
        console.log('res2', res2)
    })*/

// ---------------------------------------------------------------------------------------------------------------------
// Example-2

/*let promise = new Promise((resolve, reject) => {
    setTimeout((response) => {
        if (response.httpSatus >= 200 && response.httpSatus < 400) {
            resolve(response.data)
        } else {
            reject(response.error)
        }
    }, 2000, {httpSatus: 404, data: {userName: 'Dima', id: '4546456', status: 'active'}, error: 'not found'})
})


promise
    .then(
        res => {
            return new Promise((resolve, reject) => {
                setTimeout((response) => {
                    if (response.httpSatus >= 200 && response.httpSatus < 400) {
                        resolve(response.data)
                    } else {
                        reject(response.error)
                    }
                }, 2000, {httpSatus: 200, data: {id: '4546456', count: 'DE5465456456465465454'}, error: {}})
            })
        },
        (err) => {
            console.log('err', err)
        })
    .then(
        res2 => {
            console.log('res2', res2)
        })
    /!*    .then(
            null,
            err3 => {
                console.log('err3', err3)
            }
        )*!/

    .catch( //-----------------------> catch тоже самое что последний then, принимающий 2 колбэка
        err => {
            console.log('err', err)
        })*/
//----------------------------------------------------------------------------------------------------------------------


/*
Promise.resolve(10)
    .finally(() => {
        console.log('finally');
        throw 9000;
    })
    .then(console.log)
    .catch(console.log)
*/

//----------------------------------------------------------------------------------------------------------------------

// async / await


/*
console.log('START')
async function foo () {
    try {
        console.log('START FOO')
        const response = await new Promise((resolve, reject) => {
            reject(10)
        });
        console.log('MIDDLE')
    } catch (e) {
        console.log('error!!!!', e)
    }
}

foo()

console.log('END')*/
