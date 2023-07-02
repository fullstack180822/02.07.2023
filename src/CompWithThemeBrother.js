import React, {useContext} from "react"
import {useCounter, useUpdateCounterMethod} from './ThemeContext'

const CompWithThemeBrother = () => {
    const count = useCounter();
    return (
        <>
            <br />
            <h1> brother</h1>
            <h2>{count}</h2>
            <br />
        </>
    )
}

export {CompWithThemeBrother}