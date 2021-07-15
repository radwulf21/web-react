import React from 'react';

// Rendericação de Listas utiliazando 

class Lista extends React.Component {
  constructor(props) {
      super(props);
      this.state = {items: ["item1", "item2", "item3", "item4"]};
  }

  returnItems = (item, index) => <li key={index}>{item}</li>;

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

export default Lista;
