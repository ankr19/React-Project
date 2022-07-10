import React from "react";

const Alert = (props) => {
  const { alert } = props;
  return (
    <div style={{ height: "40px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{alert.msg}!</strong>
        </div>
      )}
    </div>
  );
};

export default Alert;
