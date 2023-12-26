import Home from "./components/Home";
import { ThemeProvider } from "styled-components";
import React from "react";
function App() {
  const theme = {
    colors: {
      // background: "#212121",
      // heading: "rgb(24 24 29)",
      // text: "rgb(24 24 29)",
      // white: "#fff",
      // black: "#212529",
      // helper: "#8490ff",
      // bg: "rgb(249 249 255)",
      // footer_bg: "#0a1435",
      // btn: "rgb(98 84 243)",
      // border: "rgba(98, 84, 243, 0.5)",
      // hr: "#ffffff",
      // gradient: "linear-gradient(to right, #862de2, #4a00e0) ;",
      // shadow: "rgba(0,0,0,0,0.2) 0px 13x 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      // shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px"
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
