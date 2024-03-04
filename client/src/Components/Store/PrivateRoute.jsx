import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ renderCondition }) => {
  return renderCondition ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
