
const Users = {};




function user(id, password, ...context) {

const User = {
        id: generateUserID(),
        psw: null,
        name: null,
    };

    switch (context[0]) {
        case "create":
            try{

            }catch{
                
            }
            break;
        case "edit":
            break;
        case "delete":
            break;
    }
    return User;
}

function save(user) {
    StorageManager.save(user)
}

export function generateUserID() {
    let id = null;
    do {
        id = (Math.random() * Number.MAX_SAFE_INTEGER).toString(16);
    } while (
        Users[id]
    );
    return id;
}

export function findUser(name, password) {
    if (name !== undefined && password !== undefined) {
        for (const user in Users) {
            console.log("searching for matching user")
            console.log(Users[user].name + " " + name, ", " + Users[user].psw + " " + password);
            if (Users[user].name === name && Users[user].psw === password) {
                console.log("found matching user");
                return (Users[user].id)
            }
        }
    }
    return (false);
}

export function editUser(id, name, password) {
    Users[id].name = name;
    Users[id].psw = password;
    console.log("edited user: ", Users[id])
    console.log("replacement password: ", password);
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