import React from 'react';

function Hello({text, children}) {
  return (
    <>
      <h1>{text}</h1>
      {children}
    </>
  );
}

const Hello2 = ({text, children}) => (
  <>
    <h1>{text}</h1>
    {children}
  </>
)

export {Hello, Hello2};
