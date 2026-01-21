import { BrowserRouter, Routes, Route } from "react-router";
// import CreateProduct  from "../product/Home";
// import ProductNavigation  from "../product/Navigation";
import ProductList from "../products/list";
import ProductCreateForm from "../products/create";
import ProductProvider from "../Context/context";
import Header from "../navigation/header";
import Footer from "../navigation/footer";

export default function Router() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />}></Route>
          {/* <Route path="/navigation" element={<ProductNavigation />}></Route> */}
          <Route path="/create" element={<ProductCreateForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ProductProvider>
  );
}
