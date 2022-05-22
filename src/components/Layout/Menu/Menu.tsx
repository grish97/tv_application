import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import "./Menu.scss";

interface IPropType {
  isOpen: boolean;
  setIsOpen: any;
}

function Menu(props: IPropType) {
  const { isOpen, setIsOpen } = props;
  const [selectedItem, setSelectedItem] = useState("home");

  const menuItems = useMemo(() => {
    return [
      { name: "search", text: "Search" },
      { name: "home", text: "Home" },
      { name: "tv-shows", text: "Tv Shows" },
      { name: "movies", text: "Movies" },
      { name: "genres", text: "Genres" },
      { name: "watch-leter", text: "Watch Leter" },
    ];
  }, [isOpen, selectedItem]);

  return (
    <div
      className={classnames("menu", { opened: isOpen })}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="top-area">
        <div className={classnames("profile", { invisible: !isOpen })}>
          <div className="picture">
            <img src={require("asstes/images/avatar.jpg")} alt="" />
          </div>
          <div className="name">Leonardo</div>
        </div>

        {menuItems.map((item: any) => (
          <div
            key={item.name}
            className={classnames("menu-item", {
              active: selectedItem === item.name,
            })}
            onClick={() => setSelectedItem(item.name)}
          >
            <div className="icon">
              <div className={item.name} />
            </div>
            <div className={`name ${!isOpen ? "d-none" : ""}`}>{item.text}</div>
          </div>
        ))}
      </div>

      <div className={classnames("bottom-area", { invisible: !isOpen })}>
        <Link to="/">Language</Link>
        <Link to="/">Get Help</Link>
        <Link to="/">Exit</Link>
      </div>
    </div>
  );
}

export default Menu;
