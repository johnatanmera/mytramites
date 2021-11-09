import { User, UserState } from "../../interfaces/user/UserInterfaces";

type UserAction =
  | { type: "addUser"; payload: User }
  | { type: "loginUser"; payload: { email: string } };

export const userReducer = (state: UserState, action: UserAction) => {
  console.log({ action });
  let otp = Math.floor(100000 + Math.random() * 900000);
  switch (action.type) {
    case "addUser":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "loginUser":
      return {
        ...state,
        users: state.users.map(({ ...user }) => {
          if (user.email === action.payload.email) {
            user.otp = otp.toString();
          }
          return user;
        }),
      };
    default:
      return state;
  }
};
