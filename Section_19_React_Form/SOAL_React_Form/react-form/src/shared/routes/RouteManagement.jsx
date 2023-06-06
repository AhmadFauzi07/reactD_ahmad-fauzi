import { useEffect, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import PageCreateProduct from "../../pages/product/PageCreateProduct";
import PageAuthLogin from "../../pages/login/PageAuthLogin";

const RouteManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <Suspense>
      {!token ? (
        <Routes>
          <Route path="/login" element={<PageAuthLogin />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/product/create" element={<PageCreateProduct />} />
        </Routes>
      )}
    </Suspense>
  );
};

export default RouteManagement;
