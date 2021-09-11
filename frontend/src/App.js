import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
function App() {
  return (
    <BrowserRouter>
      {/* <Route path="/" component={Homepage} exact></Route> */}
      <Route path="/" component={SignIn} exact></Route>
      <Route path="/signup" component={SignUp} exact></Route>
    </BrowserRouter>
  );
}

export default App;
