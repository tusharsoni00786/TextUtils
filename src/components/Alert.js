import React from "react";

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase;
    return lower.chartAt(0).toUpperCase() + lower.slice(1);
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type}  fade show`}
        role="alert"
      >
        <strong> {props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
