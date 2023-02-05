import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home, Login } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Login /> */}
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="*" element={<Home />} />
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/details/:id" component={Details} /> */}
      </Routes>
    </div>
  );
}

export default App;
