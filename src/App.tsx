import React from "react";
import { Pane, Heading } from "evergreen-ui";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Pane margin={15}>
      <Heading size={900} color="#101840">
        Evergreen Patterns
      </Heading>
      <Login />
      <Sidebar />
    </Pane>
  );
}

export default App;
