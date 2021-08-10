import Home from "./pages/home/home";
import Login from "./pages/login/Login.js";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Friends from "./pages/friends/Friends";
import PortfolioPage from "./pages/portfolio/Portfolio";
import { Quote } from "./pages/quotes/quote";
import { Memo } from "./pages/memo/Memo";
import { Dashboard } from "./pages/dashboard/Dashboard";

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
        <Route path="/friends">{user ? <Friends /> : <Login />}</Route>
        <Route path="/portfolio">
          <PortfolioPage />
        </Route>
        <Route path="/quotes">
          <Quote />
        </Route>
        <Route path="/memo">
          <Memo />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Router>
    </div>
  );
}

export default App;
