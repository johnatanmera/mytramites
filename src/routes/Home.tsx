import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useHistory } from "react-router-dom";

const navigation = [{ name: "Iniciar Sesión", href: "/login", current: true }];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Home = () => {
  let history = useHistory();
  let [count, setCount] = useState(0);
  return (
    <>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      style={{ width: 150 }}
                      className=""
                      src="./src/images/logo-lg.png"
                      alt="Formalities"
                    />
                  </div>
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <Disclosure.Panel className="sm:hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md text-base font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"></div>
              </div>
            </div>
          </>
        )}
      </Disclosure>

      <h2 className="mt-10 text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8 text-center">
            Tus trámites como nunca antes.
          </h2>
          <div className="text-center">
          <img
            className="object-contain w-full"
            src={"../src/images/dashboard-landpage.png"}
            style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '33%'}}
          />
          </div>
         
          <p className="max-w-4xl text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6 text-gray-500">
            Lleva un simple pero detallado registro de todos tus trámites. Busca
            y verifica las solicitudes.
          </p>
          <p className="max-w-4xl text-lg sm:text-4xl font-medium sm:leading-10 space-y-6 max-w-4xl mx-auto mb-6 text-blue-500">
            ¡Manténte al día con unos cuantos clics!
          </p>

          <button
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              history.push("/login");
            }}
          >
            OK, llévame
          </button>

        
          <br/>
          <br/><br/>
    </>
  );
};

export default Home;
