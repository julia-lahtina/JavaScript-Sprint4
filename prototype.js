function DeleteUserAction1(userId) {
    // this = {}
    this.type = 'DELETE_USER';
    this.payload = {
        userId: userId
    }
    // return this - неявный возврат
}

const action1 = new DeleteUserAction1(123456)

console.log(action1);