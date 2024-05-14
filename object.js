const userFabric = (name) => {
    const user = {
        name: name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1998, 2, 3),
        hello() {
            console.log(`I'm ${this.name} from ${this.site}`)
        }
    }
    return user;
}

const user1 = userFabric('Joy');
const user2 = userFabric('Freddy');

console.log(user1, user2)