import React, { useState } from 'react';
import { Test } from './MakeMoney.styled';

export const MakeMoney = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => setValue(value + 1);

  return (
    <Test>
      <button onClick={handleClick}>Make money</button>
      value: ${value}
    </Test>
  );
};
