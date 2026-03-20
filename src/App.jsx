//IMPORTS
import { MainPageLayout } from "./components/MainPageLayout"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//PAGES
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";
import Products from "./pages/Products";
function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route element= {<MainPageLayout/>}>

          <Route index element={ <MainPage /> } />
          <Route path="/info" element={ <InfoPage /> } />
          <Route path="/prodotti" element= { <Products /> } />
        

        </Route>  
              

      </Routes>

    </BrowserRouter>
  )
}

export default App
