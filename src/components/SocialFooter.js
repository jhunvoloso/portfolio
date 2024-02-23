import React from 'react'
import { Link } from 'react-router-dom';
import FBicon from "../img/facebook-icon.svg";
import INicon from "../img/linkedin-icon.svg";


function SocialFooter() {
  return (
    <div className="display-flex gap-100">
      <div className="display-flex gap-30">
        <Link to="https://www.facebook.com/jhunry.voloso/" target="_blank">
          <img src={FBicon} alt="" />
        </Link>
        <Link
          to="https://www.linkedin.com/in/jhun-raymond-voloso-2b7398184/"
          target="_blank"
        >
          <img src={INicon} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default SocialFooter;