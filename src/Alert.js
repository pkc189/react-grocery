import React, { useEffect } from "react";

const Alert = ({haa}) => {
  return (
    <>
    <p className={`alert alert-${haa.type}`}>{haa.msg}</p>
    </>
  );
};

export default Alert;
