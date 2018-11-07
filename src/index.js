import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './containers/MainPages/Home/Home';
import * as serviceWorker from './serviceWorker';

// reference: https://codesandbox.io/embed/x8omy0p9z

ReactDOM.render(<Home />, document.getElementById('root'));
serviceWorker.unregister();
