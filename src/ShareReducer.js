import React, {useState} from "react"

const  ShareReducer = ({dispatch, ACTIONS, count}) => {
 
    return (
      <>
        <span>Inner reducer</span><br />
        <h1>{count}</h1>
        <button onClick={() => dispatch({ type: ACTIONS.INCREMENT })}> + </button>
        <button onClick={() => dispatch({ type: ACTIONS.CHANGE_COUNT,  payload: { amount: 7 } })}> +7 </button>
      </>
    )
  } 

  export {ShareReducer};