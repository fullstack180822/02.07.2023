import React, {useState} from "react"

const UseStateCounter = () => {

    const [count, setCounter] = useState(0)
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)


    function changeCount(delta) {
        setCounter(prevValue => prevValue + delta);
    }

    function resetCount() {
        setCounter(_ => 0);
    }

    return (<div>
          <span>{count}</span><br />
          <button onClick={() => setCounter(prev => prev + 2)}> ++ </button>
          <button onClick={() => changeCount(+1)}> + </button>
          <button onClick={() => changeCount(-1)}> - </button>
          <button onClick={() => resetCount()}> Reset </button>
        </div>)
}

export default UseStateCounter;