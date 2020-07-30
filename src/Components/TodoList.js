import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem />
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 17px 32px;
  overflow-y: auto;
`;

export default TodoList;
