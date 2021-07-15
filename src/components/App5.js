import React from 'react';

// Utilizando e entendendo ciclo de vida do componente

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {nome: undefined, textNome: ''};
  }

  changeTextName = (event) => {
    this.setState({textNome: event.target.value});
  }

  persistName = () => {
    this.setState({nome: this.state.textNome});
    sessionStorage.setItem('nome', this.state.textNome);
  }

  componentDidMount = () => {
      const nome = sessionStorage.getItem('nome');
      if (nome) this.setState({nome});
  }

  render() {
    const renderForm = () => {
      return(
        <>
          <input type="text" onChange={this.changeTextName} placeholder="Digite seu nome"/>
          <button onClick={this.persistName}>Salvar</button>
        </>
      );
    }

    const renderText = () => {
      return(
        <>
          <p>Olá {this.state.nome}</p>
        </>
      );
    }
    return !this.state.nome ? renderForm() : renderText();
  }
}

export default App5;
