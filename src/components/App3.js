import React from 'react';

// Utilizando e entendendo o estado do componente

class App3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: ''};
  }

  changeName = (event) => {
    this.setState({nome: event.target.value});
  }

  render() {
    return(
      <>
        <input type="text" value={this.state.nome} onChange={this.changeName} placeholder="Digite seu nome"/>
        <p>Olá {this.state.nome}</p>
      </>
    );
  }
}

export default App3;
