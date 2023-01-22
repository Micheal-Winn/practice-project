import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"

function App() {

  return (
    <BrowserRouter >
        <Box>
            <Navbar/>
        </Box>
    </BrowserRouter>
  )
}

export default App
