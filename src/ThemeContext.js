import React, {useState} from "react"
import { useContext } from "react"

// [theme, updateTheme]
const PropertyThemeContext = React.createContext();
const UpdateMethodContext = React.createContext();

// [counter, updateCounter]
const PropertyCounterContext = React.createContext();
const UpdateCounterContext = React.createContext();

const useCounter = () => {
    return useContext(PropertyCounterContext)
}

const useUpdateCounterMethod = () => {
    return useContext(UpdateCounterContext)
}

const useTheme = () => {
    return useContext(PropertyThemeContext);
}

const useUpdateMethod = () => {
    return useContext(UpdateMethodContext);
}

const ThemeProvider = ( {children}) => {

    const [darkTheme, setDarkTheme] = useState(true)
    const [counter, setCounter] = useState(0)

    function changeCount(delta) {
        setCounter(prevValue => prevValue + delta);
    }

    function modifyTheme() {
        setDarkTheme(prev => !prev);
    }

    return(
        <PropertyThemeContext.Provider value={darkTheme}>
          <UpdateMethodContext.Provider value={modifyTheme}>
            <PropertyCounterContext.Provider value={counter}>
              <UpdateCounterContext.Provider value={changeCount}>
                  {children}
              </UpdateCounterContext.Provider>
            </PropertyCounterContext.Provider>
          </UpdateMethodContext.Provider>
        </PropertyThemeContext.Provider>
    )
}

export {ThemeProvider, useTheme, useUpdateMethod,
        useCounter, useUpdateCounterMethod }