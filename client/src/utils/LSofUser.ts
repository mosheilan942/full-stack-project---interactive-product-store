
const addUserInLS = (user: any) => {
    // localStorage.setItem('UserClientID', user._id);
    localStorage.setItem('UserClientName', user.name);
    localStorage.setItem('UserClientEmail', user.email);
}

const getUserNameInLS = () => {
    const userName = localStorage.getItem('UserClientName');
    return userName
}

const getUserEmailInLS = () => {
    const userEmail = localStorage.getItem('UserClientEmail');
    return userEmail
}

const removeUserInLS = () => {
    localStorage.removeItem('UserClientName');
    localStorage.removeItem('UserClientEmail');
}

export {
    addUserInLS,
    removeUserInLS,
    getUserEmailInLS,
    getUserNameInLS,
}