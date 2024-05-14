class DeleteUserAction {
    constructor() {
        this.type = 'DELETE_USER';
        this.payload = {
            userId: 1
        }
    }
}

const action2 = new DeleteUserAction(123456)

console.log(action2);