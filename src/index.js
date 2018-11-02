import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './containers/Main';
import * as serviceWorker from './serviceWorker';

// reference: https://codesandbox.io/embed/x8omy0p9z

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
