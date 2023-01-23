import React, { useState, createContext } from 'react'
import './App.scss'

import Header from './components/Header'
import Home from './components/Home'

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState('Light')

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'Light' ? 'Dark' : 'Light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App">
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Home theme={theme}/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
