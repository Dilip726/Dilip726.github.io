import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  
  const [prevScrollPos, setPrevScrollPos] = React.useState(0);
  const [visible, setVisible] = React.useState(true);
  
     const handleScroll = () => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;

    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // new useEffect:
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const initial = {
    position: "fixed",
  };

  const stylenew = {
    position: "fixed",
    background: "#777",
  };


  return (
    <>
      <nav className="navbar" style={visible ? initial : stylenew} >
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
