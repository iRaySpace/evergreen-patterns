import React from "react";
import {
  Text,
  Heading,
  Pane,
  Link,
  ApplicationIcon,
  ControlIcon,
  SettingsIcon,
} from "evergreen-ui";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export default function Sidebar() {
  return (
    <>
      <Heading size={500} marginTop={15}>
        Sidebar UI
      </Heading>
      <Pane width={270} height={768} backgroundColor="#E6E8F0" marginTop={15}>
        <Pane padding={30} textAlign="center">
          <Heading backgroundColor="white" padding={30} color="#85A3FF">
            Sidebar
          </Heading>
        </Pane>
        <Pane>
          <Pane>
            <Link
              paddingX={30}
              paddingY={15}
              display="grid"
              gridTemplateColumns="26px auto"
              href="#"
              color="neutral"
            >
              <ApplicationIcon /> <span>Dashboard</span>
            </Link>
          </Pane>
          <Pane>
            <Link
              paddingX={30}
              paddingY={15}
              display="grid"
              gridTemplateColumns="26px auto"
              href="#"
              color="neutral"
            >
              <ControlIcon /> <span>Manage</span>
            </Link>
          </Pane>
          <Pane>
            <Link
              paddingX={30}
              paddingY={15}
              display="grid"
              gridTemplateColumns="26px auto"
              href="#"
              color="neutral"
            >
              <SettingsIcon /> <span>Settings</span>
            </Link>
          </Pane>
        </Pane>
      </Pane>
      <Pane marginTop={15}>
        <Text>Source code</Text>
        <SyntaxHighlighter language="jsx">{`<Pane width={270} height={768} backgroundColor="#E6E8F0" marginTop={15}>
    <Pane padding={30} textAlign="center">
        <Heading backgroundColor="white" padding={30} color="#85A3FF">
            Sidebar
        </Heading>
    </Pane>
    <Pane>
        <Pane>
        <Link
            paddingX={30}
            paddingY={15}
            display="grid"
            gridTemplateColumns="26px auto"
            href="#"
            color="neutral"
        >
            <ApplicationIcon /> <span>Dashboard</span>
        </Link>
        </Pane>
        <Pane>
        <Link
            paddingX={30}
            paddingY={15}
            display="grid"
            gridTemplateColumns="26px auto"
            href="#"
            color="neutral"
        >
            <ControlIcon /> <span>Manage</span>
        </Link>
        </Pane>
        <Pane>
        <Link
            paddingX={30}
            paddingY={15}
            display="grid"
            gridTemplateColumns="26px auto"
            href="#"
            color="neutral"
        >
            <SettingsIcon /> <span>Settings</span>
        </Link>
        </Pane>
    </Pane>
</Pane>`}</SyntaxHighlighter>
      </Pane>
    </>
  );
}
