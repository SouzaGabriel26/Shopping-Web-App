import Router from "./Router"
import { ProductsProvider } from "./app/contexts/ProductContext"
import { Toaster } from 'react-hot-toast';
import SidebarProvider from "./app/contexts/SidebarContext";

function App() {
  return (
    <SidebarProvider>
      <ProductsProvider>
        <Router />
        <Toaster position="bottom-center" />
      </ProductsProvider>
    </SidebarProvider>
  )
}

export default App
