import React from 'react';

class Lista2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {id: 1, nome: 'Raul', completo: false},
        {id: 2, nome: 'Neander', completo: false},
        {id: 3, nome: 'Anderson', completo: true},
        {id: 4, nome: 'Yan', completo: false},
      ]
    };
  }

  returnItems = (item) => (
    <Item key={item.id} completo={item.completo}>
      {item.nome}
    </Item>
  )

  render() {
    return(
      <>
        <ul>
          {this.state.items.map(this.returnItems)}
        </ul>
      </>
    );
  }
}

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const textDecoration = this.props.completo ? 'line-through' : 'none';
    return(
      <>
        <li data-id={this.props.id} style={{textDecoration}}>
          {this.props.children}
        </li>
      </>
    );
  }
}

export default Lista2;
