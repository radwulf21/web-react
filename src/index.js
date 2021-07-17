import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';
import App5 from './components/App5';
import Lista from './components/Lista';
import Lista2 from './components/Lista2';
import {Lista3, Item} from './components/Lista3';
import Form from './components/Form';
import {Hello, Hello2} from './components/Hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title="Data de Hoje">
      { new Date().toLocaleDateString('pt-br') }
    </App2> */}

    {/* <App3/> */}
    
    {/* <App4/> */}

    {/* <App5/> */}

    {/* <Lista/> */}

    {/* <Lista2/> */}

    {/* <Lista3>
      <Item key={999} id={999} completo={false}>
        Abel
      </Item>

      <Item key={998} id={998} completo={true}>
        Miguel
      </Item>

      Not Item
    </Lista3> */}

    {/* <Form/> */}

    {/* <Hello text="Hello, world!">
      <h1>Hello, developer!</h1>
    </Hello> */}

    {/* <Hello2 text="Hello, world!">
      <h1>Hello, developer!</h1>
    </Hello2> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
