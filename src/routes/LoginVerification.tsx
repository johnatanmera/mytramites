import { useContext, useState, useEffect } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";
import { UserContext } from "../context/user/UserContext";
import { useHistory } from "react-router-dom";
import OtpInput from "react-otp-input";

export default function LoginVerification() {
  const [loginVerification, setLoginVerification] = useState("");
  const [emailLogged, setEmailLogged] = useState(
    localStorage.getItem("email") as string
  );
  const [infoUserLogged, setinfoUserLogged] = useState([
    {
      id: "",
      email: "",
      otp: localStorage.getItem("otp"),
      firstName: "",
      lastName: "",
      enabled: "",
    },
  ] as any);
  const { userState, loginUser } = useContext(UserContext);
  const { users } = userState;
  let history = useHistory();

  useEffect(() => {
    console.log("testing users ", users);
    let otpResult = users.filter((user) => {
      return user.email === emailLogged;
    });
    console.log("usuario loggeado", otpResult, "type: ", typeof otpResult);
    setinfoUserLogged(otpResult);
    // guardamos el token
    localStorage.setItem("otp", otpResult[0].otp);
  }, []);

  const handleOnChangeLoginVerification = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoginVerification(e.currentTarget.value);
  };

  const userLoginVerification = () => {
    if (loginVerification === infoUserLogged[0].otp) {
      localStorage.setItem("firstName", infoUserLogged[0].firstName);
      history.push("/dashboard");
    } else {
      alert("Autenticación inválida");
    }
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Verifica tu cuenta
            </h2>
            {/* <span className="mt-6 text-center text-rebase text-gray-900">
              Email loggeado: {emailLogged}
            </span> */}
            <br />
            <span className="mt-6 text-center text-rebase text-gray-900">
              Token: {infoUserLogged[0].otp}
            </span>
          </div>

          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <OtpInput
                value={loginVerification}
                onChange={(otp: any) => setLoginVerification(otp)}
                numInputs={6}
                inputStyle={{ display: "inline", width: "100%" }}
                className="appearance-none rounded-none relative block w-full  py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:z-10 sm:text-sm"
                // separator={<span>-</span>}
              />
            </div>
            {/* <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div> */}
          </div>

          <div className="flex items-center justify-between">
            {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div> */}
          </div>

          <div>
            <button
              onClick={userLoginVerification}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
