import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

function TodoCreate() {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CirCleButton open={open} onClick={onToggle}>
        <MdAdd />
      </CirCleButton>
    </>
  );
}

const CirCleButton = styled.button`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  width: 70px;
  height: 70px;
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 50px;

  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  transition: 0.125s all ease-in;
  ${({ open }) =>
    open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const InsertForm = styled.div`
  background: #f8f9fa;
  padding: 30px 30px 70px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  width: 100%;
  border: 1px solid #dee2e6;
  outline: none;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;

export default TodoCreate;
