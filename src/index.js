import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as Fbase from './services/firebase'

//Init firebase
Fbase.init()

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
