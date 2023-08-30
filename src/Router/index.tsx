import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/pages/Home";
import ProductDetail from "../view/pages/ProductDetail";
import HomeLayout from "../app/layouts/HomeLayout";
import LayoutFooter from "../app/layouts/LayoutFooter";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<LayoutFooter />}>

          <Route element={<HomeLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/product/:id" element={<ProductDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}