import { createContext } from "react";
import { UserState } from '../../interfaces/user/UserInterfaces';

export type UserContextProps = {
    userState: UserState,
    loginUser: (email: string) => void,
}

export const UserContext = createContext<UserContextProps>({} as UserContextProps);