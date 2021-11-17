import { auth } from './config.auth';
import api from '../api';

const authUser = async () => {
    try {
        const res = await api.get('/auth/account', {
            headers: auth()
        });

        if (res.status === 200) {
            return { token: res.data.token, typeAccountID: res.data.typeAccountID };
        } else {
            return {};
        }
    } catch (error) {
        if (error.response.status === 401) {
            localStorage.removeItem('token_user');
            localStorage.removeItem('username_user');
            return {};
        }
    }
}

export default authUser;