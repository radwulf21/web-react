import React, {useState, useEffect} from 'react';

// Utilizando Hook de Estado e Hook de Efeito em componentes funcionais

function App6() {
  const [name, setName] = useState(undefined);
  const changeName = (event) => setName(event.target.value);
  
  useEffect(
    () => {
      if (name === undefined) {
        setName(sessionStorage.getItem('name') || '');
      } else {
        sessionStorage.setItem('name', name);
      }
    }, [name]
  );
  return(
    <>
      <input type="text" value={name} onChange={changeName} placeholder="Digite seu name"/>
      <h2>{name}</h2>
    </>
  );
}

export default App6;
