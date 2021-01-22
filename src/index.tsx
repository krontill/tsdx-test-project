import React, { FC, HTMLAttributes, ReactChild } from 'react';
import axios from 'axios';
import { MakeMoney } from './MakeMoney';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactChild;
  backEndUrl?: string;
}

const HTTP_HEADERS = {
  'X-Requested-With': 'XMLHttpRequest',
};

const internalConfig = {
  withCredentials: true,
  headers: HTTP_HEADERS,
};

export const internalApi = axios.create(internalConfig);

export const search = async (backEndUrl: string) =>
  await internalApi.get(backEndUrl);

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */
const Thing: FC<Props> = ({ backEndUrl = '', children }) => {
  console.log('lib backEndUrl', backEndUrl);
  search(backEndUrl)
    .then(response => console.log('lib response', response))
    .catch(error => console.log('lib error', error));

  return (
    <div>
      <div>{children || `the snozzberries taste like snozzberries`}</div>
      <MakeMoney />
    </div>
  );
};

export const MakeMoneyButton: FC<Props> = () => <MakeMoney />;
export default Thing;
