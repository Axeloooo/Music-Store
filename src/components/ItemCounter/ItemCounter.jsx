import React from 'react';

export default function ItemCounter(props) {

  const [counter, setCounter] = React.useState(props.initial);

  function handleAdd(){
    if(counter < (props.stock)){
      setCounter(counter + 1);
    }
  }

  function handleSub(){
    if(counter >= (props.initial + 1)){
      setCounter(counter - 1);
    }
  }

  return(
    <div className="container">
      <div className="d-flex flex-row align-items-stretch text-center justify-content-around">
        <button onClick={handleSub} className='btn'> - </button>
        <p>{counter}</p>
        <button onClick={handleAdd} className='btn'> + </button>
      </div>
    </div>
  );
}
