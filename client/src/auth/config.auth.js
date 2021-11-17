import validator from 'validator';

const auth = () => {
    const user = localStorage.getItem('token_user');

    if (user && validator.isJWT(user)) {
        return { 'Authorization': 'Bearer ' + user };
    } else {
        return {};
    }
}

export { auth };