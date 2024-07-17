import React from "react";

export default function Counter({ count, onAddClick, onDecreaseClick }) {
  return (
    <>
      <div>当前数量: {count}</div>
      <button onClick={onAddClick}>+</button>
      <button onClick={onDecreaseClick}>-</button>
    </>
  );
}
