import { HelloWorld } from "../src/components/HelloWorld";
import "../public/css/styles.css";
import React from "react";
import { StyleProvider, ThemePicker } from 'vcc-ui';

function HomePage() {
  return (
    <React.StrictMode>
      <StyleProvider>
        <ThemePicker variant="light"></ThemePicker>
      </StyleProvider>
      <HelloWorld />
    </React.StrictMode>
  );
}

export default HomePage;
