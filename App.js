import React from 'react';
import './App.css';
import Todo from './compo/add';

function App() {
  return (
    <div className="Flex">   	      
     <div className='Title'><b>ADD</b></div>  
      <Todo/>         
    </div>
  );
}

export default App;
