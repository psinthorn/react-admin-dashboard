import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        {/* reset css to default */}
          <CssBaseline/> 
          <div className="app">
            <main className="content">

            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>  
  )
}

export default App;
