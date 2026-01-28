const Users = {};
//TODO: Let Users object store users.

function user() {
    return {
        id: null,
        psw: null
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

export function deleteUserByID(id) {
    if (Users[id]) {
        Users[id] = null;
        return true;
    } else {
        return false;
    }

}

export function StoreUser(user){
    if(user !== null){
Users[user.id] =  user;
    }else{
        
    }

}



export default user;