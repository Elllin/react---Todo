import React from "react";
import styled from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

function TodoItem() {
  return (
    <TodoItemBlock>
      <CheckCircle />
      <Text>어쩌구 저쩌구</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

const CheckCircle = styled.div`
  margin-right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
`;

const Remove = styled.div`
  opacity: 0;
  color: #dee2e6;
  font-size: 24px;
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

export default TodoItem;
