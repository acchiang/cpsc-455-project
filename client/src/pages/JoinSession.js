import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const JoinSession = ({...props}) => {
  const { t } = useTranslation();
  useEffect(() => {
    localStorage.setItem("sessionId", props.match.params.sessionId);
    window.location.href = "/register";
  }, []);

  return <p>{t("join-session")}</p>;
};

export default JoinSession;
