import { Fragment, useState, useContext, Key } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  SpeakerphoneIcon,
  SearchIcon,
  CheckCircleIcon,
} from "@heroicons/react/outline";
import { ProcedureContext } from "../context/procedure/ProcedureContext";
import { Procedure } from "../interfaces/procedure/ProcedureInterfaces";

interface props {
  procedure: Procedure;
}

const navigation = [{ name: "Home", href: "#", current: true }];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  const [announce, setAnnounce] = useState(1);
  const { toggleProcedure, showProcedure, procedureState } =
    useContext(ProcedureContext);
  const { procedures } = procedureState;
  const [initialProcedures, setinitialProcedures] = useState(procedures);
  const [isProcedureSelected, setIsProcedureSelected] = useState(false);
  const [firstName, setFirstName] = useState(localStorage.getItem("firstName"));
  const [search, setSearch] = useState("");

  const handleProcedure = (id: string) => {
    showProcedure(id);
    setIsProcedureSelected(true);
  };

  const handleDbClick = (id: string) => {
    toggleProcedure(id);
  };

  const searchFilter = (searchText: string, initialProcedures: any) => {
    setSearch(searchText);
    setinitialProcedures(procedures);

    let newData = [] as any;
    if (searchText) {
      newData = initialProcedures.filter((procedure: any) => {
        return procedure.title
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(searchText.toLowerCase());
      });
      setinitialProcedures([...newData]);
    } else {
      setinitialProcedures([...procedures]);
    }
  };

  return (
    <div>
      {/* Sidebar izquierda */}
      <div className="grid grid-cols-4">
        <div className="h-screen">
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
                          <MenuIcon
                            className="block h-6 w-6"
                            aria-hidden="true"
                          />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex-shrink-0 flex items-center">
                        <img
                          className="block lg:hidden h-10 w-auto"
                          src="../src/images/logo.png"
                          alt="Workflow"
                        />
                        <img
                          className="hidden lg:block h-10 w-auto"
                          src="../src/images/logo-lg.png"
                          alt="Workflow"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="ml-3 relative">
                        <div>
                          <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src="../src/images/user.png"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Tu perfil
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Configuración
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="/login"
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2 text-sm text-gray-700"
                                  )}
                                >
                                  Cerrar sesion
                                </a>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
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
              </>
            )}
          </Disclosure>
          <nav className="px-1 pt-6 overflow-y-auto font-medium text-base sm:px-3 xl:px-5 lg:text-sm pb-10 lg:pt-10 lg:pb-14 sticky?lg:h-(screen-18)">
            <h5 className="text-xl mb-6 text-left font-extrabold">
              Mis trámites
            </h5>
            <div className="input-container">
              <SearchIcon
                className="h-6 w-6 text-red"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  zIndex: 999,
                  marginTop: 7,
                  marginLeft: 7,
                }}
              />
              <input
                id="search"
                name="search"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Buscar"
                value={search}
                onChange={(e) =>
                  searchFilter(e.target.value, initialProcedures)
                }
                style={{ position: "relative", paddingLeft: 40 }}
              />
            </div>
            <br />
            <ul>
              {initialProcedures.map((procedure: any, i: Key) => (
                <li key={i}>
                  <a
                    className="px-3 py-2 text-left relative block text-gray-500 bg-cyan-50"
                    onClick={() => handleProcedure(procedure.id)}
                  >
                    <span className="rounded-md absolute inset-0 bg-cyan-50"></span>
                    <span
                      className="relative text-base noselect"
                      style={{ cursor: "pointer" }}
                    >
                      {procedure.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Sidebar derecha */}

        <div
          className="h-screen col-span-3 p-10 shadow-lg"
          style={{ backgroundColor: "#f9fafb" }}
        >
          {announce == 1 && (
            <div className="bg-gray-800 rounded">
              <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between flex-wrap">
                  <div className="w-0 flex-1 flex items-center">
                    <span className="flex p-2 rounded-lg bg-indigo-800">
                      <SpeakerphoneIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                    <p className="ml-3 font-medium text-white truncate">
                      <span className="md:hidden">
                        Anunciamos un nuevo producto!
                      </span>
                      <span className="hidden md:inline">
                        Gran noticia! Estamos emocionados de anunciar un nuevo
                        producto de marca.
                      </span>
                    </p>
                  </div>
                  <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                    >
                      Leer más
                    </a>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                    <button
                      type="button"
                      className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                    >
                      <span className="sr-only">Dismiss</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                        onClick={() => setAnnounce(0)}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />

          {!isProcedureSelected ? (
            <div className="grid grid-cols-2 gap-4">
              <div className="">
                <div className="text-lg text-gray-600">
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl leading-none font-extrabold tracking-tight text-gray-900 mt-10 mb-8 sm:mt-14 sm:mb-10">
                    Bienvenido, {firstName}
                  </h1>
                  <span className="text-justify font-bold text-cyan-600">
                    Revisa el estado de tus trámites. Elige en un trámite de la
                    izquierda para continuar
                  </span>
                </div>
              </div>

              <div className="">
                <img
                  className="object-contain w-full"
                  src={"../src/images/dashboard-welcome.png"}
                />
              </div>
            </div>
          ) : (
            <ul>
              {/* Procedure List */}
              {procedures.map((procedure: any) => {
                if (procedure.visible) {
                  return (
                    <>
                      <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 noselect"
                        onDoubleClick={() => handleDbClick(procedure.id)}
                        style={{
                          cursor: "pointer",

                          textDecoration: procedure.completed
                            ? "line-through"
                            : "",
                        }}
                      >
                        {procedure.title}
                      </h2>
                      <p style={{color: '#666', backgroundColor: '#ededed', padding: 30, marginTop: 10, marginBottom: 30, borderRadius: 5}}>
                      {procedure.description}
                      </p>

                      {procedure.completed ? (
                        <div
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <div
                            className="grid grid-cols-2 gap-4 content-center"
                            style={{ width: 65 }}
                          >
                            <CheckCircleIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                              style={{ color: "limegreen" }}
                            />
                            <span style={{ color: "green" }}>
                              {" "}
                              {"Finalizado"}
                            </span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                      <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
                        {procedure.statusList.map((statusItem: any) => {
                          return (
                            <li>
                              <article>
                                <a
                                  href="#"
                                  className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white"
                                >
                                  <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0 text-left">
                                    {statusItem.statusTitle}
                                  </h3>
                                  <time className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0 text-left">
                                    <svg
                                      viewBox="0 0 12 12"
                                      className="w-3 h-3 mr-6 overflow-visible text-cyan-400"
                                    >
                                      <circle
                                        cx="6"
                                        cy="6"
                                        r="6"
                                        fill="cyan"
                                      ></circle>
                                      <circle
                                        cx="6"
                                        cy="6"
                                        r="11"
                                        fill="none"
                                        stroke="cyan"
                                        stroke-width="2"
                                      ></circle>
                                      <path
                                        d="M 6 18 V 500"
                                        fill="none"
                                        stroke-width="2"
                                        stroke="cyan"
                                        className="text-gray-200"
                                      ></path>
                                    </svg>
                                    {statusItem.statusDate}
                                  </time>
                                  <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0  text-left">
                                    {statusItem.statusDescription}
                                  </p>
                                </a>
                              </article>
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  );
                }
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
