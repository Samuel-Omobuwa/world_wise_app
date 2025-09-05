import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/product";


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/product" element={<Product /> } />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App;
