const Users = {};
//TODO: Let Users object store users.

function user() {
    return {
        id: null,
        psw: null,
        name: null
    };
}

export function generateUserID() {
    let id = null;

    do {
        id = (Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
    } while (
        //TODO: check against an actual database 
        Users[id]
    );
    return id;
}

export function findUser(name, password) {
    if (name !== undefined && password !== undefined) {
        for (const user in Users) {
            console.log("searching for matching user")
            if (Users[user].name === name && Users[user].psw === password) {
                console.log("found matching user")
                return (Users[user].id)
            }
        }
    }
    return (false);
}

export function editUser(id, name, password){
    Users[id].name = name;
    Users[id].password = password;
}

export function deleteUser(id) {
    delete Users[id];
    console.log("remaining users: ", Users);
}

export function storeUser(user) {
    if (user !== null) {
        Users[user.id] = user;
        console.log("Users: ", Users);
    }
}



export default user;