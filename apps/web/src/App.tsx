import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/Default.layout";
import NoMatch from "./layouts/NoMatch";
import StoresPage from "./pages/stores/stores.page";
import ProductsPage from "./pages/products/products.page";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<StoresPage />} />
          <Route path="stores/:storeId/products" element={<ProductsPage />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
