import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
 
  
  const [show, setShow] = React.useState(false);
  const [scroll, setScroll] = React.useState(0);

  const changeInitial = {
    width: "100vw",
    backgroundColor: "black",
  };
  console.log({ scroll });

  React.useEffect(() => {
    let handleScroll = () => {
      var st = window.pageYOffset || document.documentElement.scrollTop;
      console.log(
        "document.documentElement.scrollTop",
        document.documentElement.scrollTop,
        window.pageYOffset
      );
      if (st > lastScroll) {
        // down
        setScroll(1);
      } else {
        // up
        setScroll(0);
      }
      lastScroll = st <= 0 ? 0 : st;
    };
    document.addEventListener("scroll", handleScroll, false);
    return () => {
      document.removeEventListener("scroll", handleScroll, false);
    };
  });
  

  const initial = {
    margin:'2px'
  };

  const changeInitial = {
    background: "#777",
  };
  


  return (
    <>
      <nav className="navbar" style={scroll !== 0 ? changeInitial : initial} >
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
