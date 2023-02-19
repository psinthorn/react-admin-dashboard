import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopNav from "./scenes/global/TopNav";
function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
        {/* reset css to default */}
          <CssBaseline/> 
          <div className="app">
            <main className="content">
                <TopNav />
            </main>
          </div>
        </ThemeProvider>
    </ColorModeContext.Provider>  
  )
}

export default App;
