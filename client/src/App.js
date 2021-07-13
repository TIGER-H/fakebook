import Home from "./pages/home/home";
import Login from "./pages/login/Login.js";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
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
