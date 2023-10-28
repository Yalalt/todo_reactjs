import React, { useRef, useState } from 'react';

const CounterWrapper = () => {
  const [count, setCounter] = useState(0);
  const counterRef = useRef(0);

  function increment() {
    // setCounter(count + 1);
    counterRef.current = counterRef.current + 1;
  }

  function finish() {
    setCounter(counterRef.current);
  }

  return (
    <>
      <h2>{count}</h2>
      <div className='todo-list'>
        <button className='todo-btn' onClick={increment}>
          1-ээр нэмэгдүүлэх
        </button>
        <button className='todo-btn' onClick={finish}>
          Дуусгах
        </button>
      </div>
    </>
  );
};

export default CounterWrapper;
