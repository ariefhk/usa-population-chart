import React from "react";
import { Navigate } from "react-router";

interface RedirectToProps {
  to: string;
  isReplace?: boolean;
}

const RedirectTo: React.FC<RedirectToProps> = ({ to, isReplace = false }) => {
  return <Navigate to={to} replace={isReplace} />;
};

export default RedirectTo;
