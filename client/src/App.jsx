import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingSite } from "./components";
import LayoutAdmin from "./modules/Layout/LayoutAdmin";
import LayoutUser from "./modules/Layout/LayoutUser";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const AdminLoginPage = lazy(() => import("./pages/adminPages/AdminLoginPage"));
const AdminHomePage = lazy(() => import("./pages/adminPages/AdminHomePage"));
const DoanhThuPage = lazy(() => import("./pages/adminPages/DoanhThuPage"));
const SanPhamPage = lazy(() => import("./pages/adminPages/SanPhamPage"));
const DonHangPage = lazy(() => import("./pages/adminPages/DonHangPage"));
const AddProduct = lazy(() => import("./pages/adminPages/AddProduct"));

const App = () => {
  return (
    <Suspense fallback={<LoadingSite />}>
      <Routes>
        <Route element={<LayoutUser></LayoutUser>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/lien-he" element={<Contact></Contact>}></Route>
          <Route path="/gio-hang" element={<CartPage></CartPage>}></Route>
          <Route
            path="/thanh-toan"
            element={<CheckOutPage></CheckOutPage>}></Route>
          <Route
            path="/collection/:slug"
            element={<CollectionPage></CollectionPage>}></Route>
          <Route
            path="/product/:slug"
            element={<ProductPage></ProductPage>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<LayoutAdmin></LayoutAdmin>}>
          <Route path="/admin" element={<AdminHomePage></AdminHomePage>} />
          <Route path="/admin/thong-ke-doanh-thu" element={<DoanhThuPage />} />
          <Route path="/admin/quan-ly-san-pham" element={<SanPhamPage />} />
          <Route path="/admin/quan-ly-don-hang" element={<DonHangPage />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
