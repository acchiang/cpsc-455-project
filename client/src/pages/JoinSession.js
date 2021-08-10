import React, { useEffect } from "react";

const JoinSession = ({...props}) => {
  useEffect(() => {
    localStorage.setItem("sessionId", props.match.params.sessionId);
    window.location.href = "/register";
  }, []);

  return <p>Joining session...</p>;
};

export default JoinSession;
