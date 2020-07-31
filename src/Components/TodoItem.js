import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

function TodoItem({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TodoItemBlock>
      <CheckCircle onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove} done={done}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

const CheckCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 13px;
  width: 22px;
  height: 22px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 17px;

  ${({ done }) =>
    done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 17px;
  color: #495057;
  ${({ done }) =>
    done &&
    css`
      color: #ced4da;
      text-decoration: line-through;
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  color: #dee2e6;
  font-size: 22px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

export default React.memo(TodoItem);
