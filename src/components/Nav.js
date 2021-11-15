import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  // const [onScroll, setOnScroll] = React.useState(0);
  // const [visible, setVisible] = useState(true);
  // const navbarStyle = {
  //   position: "fixed",
  //   top: "5px",
  //   left: "0px",
  // };

  
  // const handleOnScroll = () => {
  //   const currentScroll = window.pageYOffset;
  //   setVisible(
  //     (onScroll > currentScroll && onScroll - currentScroll > 70) ||
  //       currentScroll < 10
  //   );
  //   setOnScroll(currentScroll);
  // };

  // React.useEffect(() => {
  //   window.addEventListener("scroll", handleOnScroll);

  //   return () => window.removeEventListener("scroll", handleOnScroll);
  // }, [onScroll, visible]);

  // style={{ ...navbarStyle  , top: visible ? '0' : '-60px'}}

  return (
    <>
      <nav className="navbar" >
        <div className="max-width">
          <div className="logo" >
            {" "}
            <a href="#0" style={{textDecoration:'none'}}>
              Dilip <span>Suthar</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              {" "}
              <Link to="/" className="menu-btn"></Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;
