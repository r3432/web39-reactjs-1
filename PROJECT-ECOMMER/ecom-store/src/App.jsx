import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/user/Home"
import NotFound from "./pages/user/NotFound"
import Layout from "./pages/Layout"
import ProductDetail from "./pages/user/ProductDetail"
import DashBoard from "./pages/admin/DashBoard"
import LayoutAdmin from "./pages/admin/Layout"
import Login from "./pages/auth/Login"


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
  
  <Route path="/" element={<Layout/>}>
<Route index element={<Home/>}/>
<Route path="*" element={<NotFound/>}/>
<Route path="/:id" element={<ProductDetail/>}/>


</Route>


<Route path="/dashboard" element={<LayoutAdmin/>}>
<Route index element={<DashBoard/>}/>
</Route>


<Route path='/login' element={<Login/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}

export default App