import { useContext, createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Cambiar tema
    </button>
  )
}

function App() {
  return (
    <div>
      <ThemeProvider>
        <ThemeButton />
      </ThemeProvider>
    </div>
  );
}

export default App;
