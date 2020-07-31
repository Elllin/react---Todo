import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodoState } from "../TodoContext";

function TodoList() {
  const todos = useTodoState();
  return (
    <TodoListBlock>
      {todos.map(({ id, text, done }) => (
        <TodoItem key={id} id={id} text={text} done={done} />
      ))}
    </TodoListBlock>
  );
}

const TodoListBlock = styled.div`
  flex: 1;
  padding: 17px 32px;
  overflow-y: auto;
`;

export default TodoList;
