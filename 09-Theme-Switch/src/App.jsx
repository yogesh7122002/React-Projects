import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeProvider } from './Context/Theme'
import { useEffect } from 'react'
import ThemeBtn from './Components/Themebtn'
import Card from './Components/Card'

function App() {
  const [themeMode, setThememode] = useState("light")

  const darkTheme = (e) => {
    setThememode("dark")

  }

  const lightTheme = (e) => {
    setThememode("light")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (

    <>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />

            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
