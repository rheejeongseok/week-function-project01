import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import * as serviceWorker from './serviceWorker';

const msg = `react\nredux\nmogongdb\nodejsssss\nmobx`

ReactDOM.render(
  <React.StrictMode>
    {/*<App name={"이름임"} sex={"남자"} age={"30대~"}/>*/}
    {/*<App msg={msg}/>*/}
    {/*<App2 />*/}
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
