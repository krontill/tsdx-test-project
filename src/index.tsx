import React, { FC, HTMLAttributes, ReactChild } from 'react';
import { MakeMoney } from './MakeMoney';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
const Thing: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>{children || `the snozzberries taste like snozzberries`}</div>
      <MakeMoney />
    </div>
  );
};

export const MakeMoneyButton: FC<Props> = () => <MakeMoney />;
export default Thing;
