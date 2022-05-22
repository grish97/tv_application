import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Layout.scss";
import Menu from "./Menu/Menu";

interface IPropType {}

function Layout(props: IPropType) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <div className="menu-section">
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <div className={`content-section ${isOpen ? "back-content" : ""}`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
