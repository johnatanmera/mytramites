import { useReducer } from "react";
import { UserState } from "../../interfaces/user/UserInterfaces";
import { UserContext } from "./UserContext";
import { userReducer } from "./UserReducer";

const INITIAL_STATE: UserState = {
  userCount: 4,
  users: [
    {
      id: "1",
      email: "mera.jonathan@hotmail.com",
      otp: "000000",
      firstName: "Johnatan",
      lastName: "Mera",
      enabled: true,
    },
    {
      id: "2",
      email: "miguel.moreno@evolutionxp.com",
      otp: "000000",
      firstName: "Miguel",
      lastName: "Moreno",
      enabled: true,
    },
    {
      id: "3",
      email: "karol@evolutionxp.com",
      otp: "000000",
      firstName: "Karol",
      lastName: "Zapata",
      enabled: true,
    },
    {
      id: "4",
      email: "mera.jonathan@outlook.com",
      otp: "000000",
      firstName: "Johnatan",
      lastName: "Mera",
      enabled: false,
    },
  ],
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const UserProvider = ({ children }: props) => {
  const [userState, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const loginUser = (email: string) => {
    dispatch({ type: 'loginUser', payload: {email}})
  }

  return (
    <UserContext.Provider value={{ userState, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};
