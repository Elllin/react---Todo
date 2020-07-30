import React from "react";
import styled from "styled-components";

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

const TodoTemplateBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 630px;

  margin: 0 auto;
  margin-top: 55px;

  position: relative;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);
`;

export default TodoTemplate;
