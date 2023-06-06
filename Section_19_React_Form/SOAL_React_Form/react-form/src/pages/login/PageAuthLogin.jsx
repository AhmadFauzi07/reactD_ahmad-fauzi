import React from "react";
import { useNavigate } from "react-router-dom";

import LoginForm from "../../features/login/components/LoginForm/LoginForm";

const PageAuthLogin = () => {
  const navigate = useNavigate();

  const onFinish = () => {
    localStorage.setItem("token", "tokennn");

    navigate("/product/create");
  };

  return (
    <React.Fragment>
      <LoginForm onFinish={onFinish} />
    </React.Fragment>
  );
};

export default PageAuthLogin;
