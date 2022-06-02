import React from "react";
import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
    const isLogin = Cookies.get("token");

    return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
