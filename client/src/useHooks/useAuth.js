import { useState, useEffect } from 'react';
import lodash from 'lodash';
import auth from '../auth/user.auth';

export default function useAuth() {
    const [admin, setAdmin] = useState(true);

    useEffect(() => {
        const checkTypeAccount =  async () => {
            const response = await auth();

            if (lodash.isEmpty(response) || response.typeAccountID !== 1) {
                setAdmin(false);
            } else {
                setAdmin(true);
            }
        }

        checkTypeAccount();

        return () => {
            setAdmin(false);
        }
    }, []);

    return admin;
}
