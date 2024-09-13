import React from "react";

const DropdownItem = ({ name, icon }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{ marginRight: "5px" }}
        className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
      >
        {icon}
      </div>
      {name}
    </div>
  );
};

export default DropdownItem;
