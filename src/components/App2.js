import React from 'react';

// Usando props para construir componentes dinâmicos

class App2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="box">
        <div id="title">{this.props.title}</div>
        <div id="text">{this.props.children}</div>
      </div>
    );
  }
}

export default App2;
