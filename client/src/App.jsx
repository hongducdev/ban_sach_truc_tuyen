import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSite } from "./components";
import Layout from "./modules/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <Suspense fallback={<LoadingSite />}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/lien-he" element={<Contact></Contact>}></Route>
          <Route path="/gio-hang" element={<CartPage></CartPage>}></Route>
          <Route path="/thanh-toan" element={<CheckOutPage></CheckOutPage>}></Route>
          <Route path="/collection/:slug" element={<CollectionPage></CollectionPage>}></Route>
          <Route path="/product/:slug" element={<ProductPage></ProductPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
