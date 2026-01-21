import { BrowserRouter, Routes, Route } from "react-router";
// import CreateProduct  from "../product/Home";
// import ProductNavigation  from "../product/Navigation";
import Header from "../section/navigation/header";
import Footer from "../section/navigation/footer";
import ProductProvider from "../Context/context";
import ProductCreateForm from "../section/products/create";
import { ProductListPage } from "../section/products";

export default function Router() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListPage />}></Route>
          {/* <Route path="/navigation" element={<ProductNavigation />}></Route> */}
          <Route path="/create" element={<ProductCreateForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ProductProvider>
  );
}
