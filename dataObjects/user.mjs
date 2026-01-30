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

export function deleteUser(name, password) {
    
    if (name !== undefined && password !== undefined) {        
        for (const user in Users) {
            console.log(Users[user].name, name, Users[user].psw, password)

            if (Users[user].name === name && Users[user].psw === password) {

                delete Users[user];
                console.log(Users);
                  return(true)
            }
        }
    }
    return(false)
}

export function storeUser(user) {
    if (user !== null) {
        Users[user.id] = user;
    }
}



export default user;