import { useCallback, useEffect, useState, useRef } from 'react';
import Keycloak from "keycloak";

const client = new Keycloak({
    url: 'http://localhost:8081/',
    realm: 'KBE_Project_Realm',
    clientId: 'API_Gateway'
});
export const useAuth = () => {
    const isRun = useRef(false);
    const [user, setUser] = useState({});
    const [isLogin, setLogin] = useState(false);


    useEffect(() => {
        if (!isLogin) {
            return;
        }

        const fetchUserInfo = async () => {
            try {
                const userProfile = await client.loadUserProfile();
                setUser({ ...userProfile, fullName: `${userProfile.firstName} ${userProfile.lastName}` });
            } catch (err) {
                console.log({ isVisible: true, message: err.message });
            }
        };

        if (client.authenticated) {
            fetchUserInfo();
        }
    }, [isLogin]);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;
        client
            .init({
                pkceMethod: 'S256',
                redirectUri: process.env.REACT_APP_KEYCLOAK_RIDIRECT_URL,
                checkLoginIframe: false
            })
            .then((res) => {
                setLogin(res);
            });
    }, []);

    return {
        isAuthenticated: !!client.authenticated,
        meta: {
            client,
        },
        token: client.token,
        isLogin,
        client,
        user,
        roles: client.realmAccess,
        logout: useCallback(() => { client.logout(); }, [client]),
        login: useCallback(() => { client.login(); }, [client]),
    };
};



