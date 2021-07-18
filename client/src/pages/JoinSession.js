import React, { useEffect } from "react";

const JoinSession = () => {
  useEffect(() => {
    if (window.location.href.includes('/registered')) {
      localStorage.setItem("sessionPath", window.location.pathname.replace('/registered',''));
      window.location.href = "/order-screen";
    } else {
      localStorage.setItem("sessionPath", window.location.pathname);
      window.location.href = "/register-user";
    }
  }, []);

  return <p>Joining session...</p>;
};

export default JoinSession;
