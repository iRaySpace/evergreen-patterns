import React from "react";
import { Pane, Heading } from "evergreen-ui";
import Login from "./components/Login";

function App() {
  return (
    <Pane margin={15}>
      <Heading size={900} color="#101840">
        Evergreen Patterns
      </Heading>
      <Login />
    </Pane>
  );
}

export default App;
