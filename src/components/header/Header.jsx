import Button from "../common/button/Button";
import "./Header.css";

const Header = ({ fnToggleForm }) => {
    return (
        <header className="header">
            <h1 className="header__logo">Todo Juntos</h1>
            <Button
                text="Menu"
                evClick={() => {
                    fnToggleForm();
                }}
            />
        </header>
    );
};

export default Header;
