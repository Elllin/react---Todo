import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./Components/TodoTemplate";
import Head from "./Components/Head";

const GlobalStyle = createGlobalStyle`
  body{
  background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Head></Head>
      </TodoTemplate>
    </>
  );
}

export default App;
