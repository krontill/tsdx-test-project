import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Thing, { MakeMoneyButton } from '../.';

const App = () => {
  return (
    <div>
      <div>
        Thing:
        <Thing />
      </div>
      <div>
        MakeMoneyButton:
        <MakeMoneyButton />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
