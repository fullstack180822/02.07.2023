import React, {useContext} from "react"
import {useTheme, useUpdateMethod} from './ThemeContext'
import {useCounter, useUpdateCounterMethod} from './ThemeContext'

const CompWithTheme = () => {
    // const [darkTheme, toggleTheme] = useState(default...)
    const darkTheme = useTheme()
    const toggleTheme = useUpdateMethod()
    const count = useCounter();
    const updateCounter = useUpdateCounterMethod();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333' ,
        padding: '2rem',
        margin: '2rem'
    }
    return (
        <>
            <br />
            <div style={themeStyles}>Function Theme</div>
            <button onClick={toggleTheme}>Toggle Theme</button><br />
            <span>{count}</span><br />
            <button onClick={() => updateCounter(+1)}> + </button>
            <button onClick={() => updateCounter(-1)}> - </button>            
        </>
    )
}

export {CompWithTheme}