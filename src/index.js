import React from 'react';
import { render } from 'react-dom';
import 'styles/main.css';
import App from 'App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
