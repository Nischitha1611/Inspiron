import React from "react";
import Logo from "../../img/logo.png";
import Logo2 from "../../img/logo2.png";
import Logo3 from "../../img/logo3.png";
import Logo4 from "../../img/logo4.png";
import Logo7 from "../../img/logo7.png";
import { UilSearch } from "@iconscout/react-unicons";
import "./LogoSearch.css";
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo7} alt="" className="logo" />
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        <div className="s-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
