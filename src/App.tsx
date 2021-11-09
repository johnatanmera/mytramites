import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import Login from "./routes/Login";
import LoginVerification from "./routes/LoginVerification";
import Dashboard from "./routes/Dashboard";
import { ProcedureProvider } from "./context/procedure/ProcedureProvider";
import { UserProvider } from "./context/user/UserProvider";

function App() {
  return (
    <div className="App">
      <div>
        <ProcedureProvider>
        <UserProvider>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/verification">
              <LoginVerification />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
          </UserProvider>
        </ProcedureProvider>
      </div>
    </div>
  );
}

export default App;
