import React, { useState } from 'react';

export const MakeMoney = () => {
  const [value, setValue] = useState(0);
  const handleClick = () => setValue(value + 1);

  return (
    <div>
      <button onClick={handleClick}>Make money</button>
      value: ${value}
    </div>
  );
};
