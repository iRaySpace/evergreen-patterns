import React from "react";
import {
  Pane,
  Heading,
  Card,
  TextInputField,
  Button,
  Text,
} from "evergreen-ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

function App() {
  return (
    <Pane margin={15}>
      <Heading size={900} color="#101840">
        Evergreen Patterns
      </Heading>
      <Heading size={500} marginTop={15}>
        Login UI
      </Heading>
      <Card border="1px solid #E6E8F0" elevation={1} width={384} marginTop={10}>
        <Pane padding={15} textAlign="center">
          <Heading>Evergreen Login</Heading>
        </Pane>
        <Pane padding={15}>
          <TextInputField required label="Email" placeholder="admin@test.com" />
          <TextInputField
            required
            label="Password"
            placeholder="*****"
            type="password"
            validationMessage="Your email/password is incorrect"
          />
          <Button appearance="primary">Login</Button>
        </Pane>
      </Card>
      <Pane marginTop={15}>
        <Text>Source code</Text>
        <SyntaxHighlighter language="jsx">
          {`<Card border="1px solid #E6E8F0" elevation={1} width={384} marginTop={10}>
  <Pane padding={15} textAlign="center">
    <Heading>Evergreen Login</Heading>
  </Pane>
  <Pane padding={15}>
    <TextInputField required label="Email" placeholder="admin@test.com" />
    <TextInputField
      required
      label="Password"
      placeholder="*****"
      type="password"
      validationMessage="Your email/password is incorrect"
    />
    <Button appearance="primary">Login</Button>
  </Pane>
</Card>`}
        </SyntaxHighlighter>
      </Pane>
    </Pane>
  );
}

export default App;
