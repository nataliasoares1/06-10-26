import CadastroPage from "./Pages/CadastroPage"
import LoginPage from "./Pages/LoginPage"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/Cadastro" element={<CadastroPage/>} />

        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
