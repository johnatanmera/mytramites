import { LockClosedIcon } from "@heroicons/react/solid";
import { Key, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/user/UserContext";

export default function Login() {
  const { userState, loginUser } = useContext(UserContext);
  const { users } = userState;
  const [email, setEmail] = useState("");

  let history = useHistory();
  const userLogin = () => {
    localStorage.setItem('email', email);
    let checkEmail = users.some(user => user.email === email);
    if(checkEmail){
      loginUser(email);
      history.push("/verification");
    }
    else{
      alert('Usuario no registrado en la base de datos');
    }
    
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="../src/images/logo.png"
              alt="MyTramites"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Inicia Sesion en tu cuenta
            </h2>
          </div>
          {/* <form className="mt-8 space-y-6"> */}
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Recordarme
                </label>
              </div> */}
          </div>

          <div>
            <button
              onClick={userLogin}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Iniciar Sesion
            </button>
            <ul>
              {users.map((user, i:Key) => (
                
                  <li key={i}>{user.email}</li>
                  
               
              ))}
            </ul>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
}
