import React, { createContext, useState } from 'react';
import { LoginUser, User, UserStateType } from '../types/UserType';

interface UserContextProviderProps {
    children: React.ReactNode;
}
interface UserContextType {
    user: null | LoginUser;
    setUser: React.Dispatch<React.SetStateAction<null |  LoginUser>>;
}

export const UserContext = createContext<UserContextType | null>(null);

const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, setUser] = useState<null |  LoginUser>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;