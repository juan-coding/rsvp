import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';



// let initialInvitees = [
//   {
//     name: 'Iver',
//     confirmed: true,
//   },
//   {
//     name: 'Corrina',
//     confirmed: true,
//   },
//   {
//     name: 'Joel',
//     confirmed: true,
//   }
// ];

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
