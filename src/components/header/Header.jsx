import { useState } from "react";
import Button from "../common/button/Button";
import "./Header.css";

const Header = ({ fnToggleForm }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="header">
      <h1 className="header__logo">To-do list</h1>
      <Button
        text={toggleMenu ? "Fechar Menu" : "Abrir Menu"}
        evClick={() => {
          setToggleMenu(!toggleMenu);
          fnToggleForm();
        }}
      />
    </header>
  );
};

export default Header;
