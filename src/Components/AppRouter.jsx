import { Routes, Route, Navigate } from 'react-router-dom';
import Loader from "./loader/Loader";

// Импорты страниц
import Main from "../Pages/Main/Main"
import Catalog from "../Pages/Catalog/Catalog"
import Product from '../Pages/Product/Product';

const AppRouter = () => {

  return (
    <Routes>
      {/* Публичные */}

      {/* menu */}
        <Route path="/" element={<Main />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<Product />} />

      {/* 404 */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;