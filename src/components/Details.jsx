import React from "react";

function details(props) {
  return (
    <div>
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}
export default details;
