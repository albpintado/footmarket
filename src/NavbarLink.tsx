import React from "react";
import { NavLink } from "react-router-dom";

type NavbarLinkProps = {
  season: string;
};

const NavbarLink = ({ season }: NavbarLinkProps): JSX.Element => {
  if (season === "Todos") {
    return (
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-active-link" : "nav-link"
        }
      >
        Todos
      </NavLink>
    );
  }
  return (
    <NavLink
      to={season}
      className={({ isActive }) => (isActive ? "nav-active-link" : "nav-link")}
    >
      {String(Number(season) - 1) + "/" + season.substring(2, 4)}
    </NavLink>
  );
};

export default NavbarLink;
