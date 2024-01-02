import React, { useContext } from 'react';
import FirstContext from './FirstContext';
import SecondContext from './SecondContext';

const MyConsumerComponent = () => {
  const firstContextData = useContext(FirstContext);
  const secondContextData = useContext(SecondContext);

  return (
    <div>
      <h2>Consumer Component</h2>
      <p>First Context Value: {firstContextData}</p>
      <p>Second Context Value: {secondContextData}</p>
    </div>
  );
};

export default MyConsumerComponent;
