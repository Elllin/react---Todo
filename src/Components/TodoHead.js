import React from "react";
import styled from "styled-components";

function TodoHead() {
  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <HeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">남은 할일 2개</div>
    </HeadBlock>
  );
}

const HeadBlock = styled.div`
  padding: 30px 32px 24px;
  border-bottom: 1px solid #e9ecdf;

  h1 {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 17px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 17px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

export default TodoHead;
