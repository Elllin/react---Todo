import React from "react";
import styled from "styled-components";

function TodoList() {
  return <TodoListBlock>TodoList</TodoListBlock>;
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 17px 32px;
  overflow-y: auto;
  background: gray;
`;

export default TodoList;
