import Home from "./pages/home/home";
import Login from "./pages/login/Login.js";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Router>
        <Route exact path="/">
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
      </Router>
    </div>
  );
}

export default App;
