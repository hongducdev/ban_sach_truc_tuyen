import { lazy, Suspense, useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { LoadingSite } from "./components";
import LayoutAdmin from "./modules/Layout/LayoutAdmin";
import LayoutUser from "./modules/Layout/LayoutUser";
import { AdminContext, AdminContextProvider } from "./context/AdminContext";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const SearchPage = lazy(() => import("./pages/SearchPage"));
const Products = lazy(() => import("./pages/ProductsPage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const AdminLoginPage = lazy(() => import("./pages/adminPages/AdminLoginPage"));
const AdminHomePage = lazy(() => import("./pages/adminPages/AdminHomePage"));
const DoanhThuPage = lazy(() => import("./pages/adminPages/DoanhThuPage"));
const SanPhamPage = lazy(() => import("./pages/adminPages/SanPhamPage"));
const DonHangPage = lazy(() => import("./pages/adminPages/DonHangPage"));
const AddProduct = lazy(() => import("./pages/adminPages/AddProduct"));
const EditProduct = lazy(() => import("./pages/adminPages/EditProduct"));


const App = () => {

  const navigate = useNavigate();
  const { adminInfo } = useContext(AdminContext);
  useEffect(() => {
    if (window.location.pathname.includes("/admin")) {
      if (!adminInfo?.username) {
        navigate("/login");
      }
    }
  }, [adminInfo]);

  return (
    <>
      <AdminContextProvider>
        <Suspense fallback={<LoadingSite />}>
          <Routes>
            <Route path="/login" element={<AdminLoginPage />}></Route>
            <Route element={<LayoutAdmin />}>
              <Route path="/admin" element={<AdminHomePage></AdminHomePage>} />
              <Route
                path="/admin/thong-ke-doanh-thu"
                element={<DoanhThuPage />}
              />
              <Route path="/admin/quan-ly-san-pham" element={<SanPhamPage />} />
              <Route path="/admin/quan-ly-don-hang" element={<DonHangPage />} />
              <Route path="/admin/add-product" element={<AddProduct />} />
              <Route
                path="/admin/edit-product/:productId"
                element={<EditProduct />}
              />
            </Route>
          </Routes>
        </Suspense>
      </AdminContextProvider>
      <Suspense fallback={<LoadingSite />}>
        <Routes>
          <Route path="/" element={<LayoutUser />}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/lien-he" element={<Contact></Contact>}></Route>
            <Route path="/gio-hang" element={<CartPage></CartPage>}></Route>
            <Route path="/tim-kiem" element={<SearchPage></SearchPage>}></Route>
            <Route
              path="/thanh-toan"
              element={<CheckOutPage></CheckOutPage>}
            ></Route>
            <Route
              path="/collection/:collectionID"
              element={<CollectionPage></CollectionPage>}
            ></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route
              path="/product/:productID"
              element={<ProductPage></ProductPage>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
