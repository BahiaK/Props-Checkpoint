import React, { Component } from "react";

const FullName = (props) => {
  return (
    <div className="name">
      <div>{props.children}</div>

      <div>{props.name}</div>
    </div>
  );
};
FullName.defaultProps = {
  name: "Khaled Bahia",
};

export default FullName;
