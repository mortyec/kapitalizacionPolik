import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function NavbarNormal() {
  let location = useLocation();

  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };

  const navigate = useNavigate();

  const selOpt = () => {
    navigate("/lets-talk");
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  const closeMenu = () => {
    console.log(location.pathname);

    navigate("/");
    handleToggle();
  };

  const topFunction = () => {
    navigate("/");
    if (isActive) {
      handleToggle();
    }
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Estado local para el primer elemento del menú
  const [showSubmenu1, setShowSubmenu1] = useState(false);
  const [showSubmenu2, setShowSubmenu2] = useState(false);
  const [showSubmenu3, setShowSubmenu3] = useState(false);

  // Funciones para manejar el estado local del primer elemento del menú
  const handleMouseEnter1 = () => {
    setShowSubmenu1(true);
  };

  const handleMouseLeave1 = () => {
    setShowSubmenu1(false);
  };

  // Funciones para manejar el estado local del primer elemento del menú
  const handleMouseEnter2 = () => {
    setShowSubmenu2(true);
  };

  const handleMouseLeave2 = () => {
    setShowSubmenu2(false);
  }
  // Funciones para manejar el estado local del primer elemento del menú
  const handleMouseEnter3 = () => {
    setShowSubmenu3(true);
  };

  const handleMouseLeave3 = () => {
    setShowSubmenu3(false);
  }

  return (
    <>
      <div className={isActive ? "mainMenu mainMenuActive" : "mainMenu"}>
        <div className="linkBoxSinHome"></div>
      </div>
      <div className={isActive ? "menuLateral menuLateralActive" : "menuLateral"}>
        <a className="burger" onClick={handleToggle}>
          {" "}
          <span></span> <span></span>{" "}
        </a>
        <div className="logoLateral" onClick={topFunction}></div>
        <div className="contenedorLinks">
          <Link to="/" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
            <p>Texto 1</p>
            {showSubmenu1 && (
              <div className="navbar-submenu uno">
                <Link to="/">Subtexto 1</Link>
                <Link to="/">Subtexto 2</Link>
                <Link to="/">Subtexto 3</Link>
                <Link to="/">Subtexto 4</Link>
              </div>
            )}
          </Link>
          <Link to="/" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
            <p>Texto 2</p>
            {showSubmenu2 && (
              <div className="navbar-submenu dos">
                <Link to="/">Subtexto 5</Link>
                <Link to="/">Subtexto 6</Link>
                <Link to="/">Subtexto 7</Link>
                <Link to="/">Subtexto 8</Link>
              </div>
            )}
          </Link>
          <Link to="/" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
            <p>Texto 3</p>
            {showSubmenu3 && (
              <div className="navbar-submenu tres">
                <Link to="/">Subtexto 9</Link>
                <Link to="/">Subtexto 10</Link>
                <Link to="/">Subtexto 11</Link>
                <Link to="/">Subtexto 12</Link>
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavbarNormal;
