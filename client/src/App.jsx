import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./modules/Layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<Layout></Layout>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/lien-he" element={<Contact></Contact>}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
