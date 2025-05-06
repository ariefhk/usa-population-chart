import React from "react";
import { Navigate } from "react-router";

interface IRedirectToProps {
  to: string;
  isReplace?: boolean;
}

const RedirectTo: React.FC<IRedirectToProps> = ({ to, isReplace = false }) => {
  return <Navigate to={to} replace={isReplace} />;
};

export default RedirectTo;
