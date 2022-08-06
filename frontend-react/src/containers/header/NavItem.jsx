import React, { useState } from "react";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <p onClick={() => setOpen(!open)}>{props.icon}</p>

      {open && props.children}
    </li>
  );
};

export default NavItem;
