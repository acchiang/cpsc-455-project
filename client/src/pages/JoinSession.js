import React, { useEffect } from "react";

const JoinSession = () => {
  useEffect(() => {
    localStorage.setItem("sessionPath", window.location.pathname);
    window.location.href = "/order-screen";
  }, []);

  return <p>Joining session...</p>;
};

export default JoinSession;
