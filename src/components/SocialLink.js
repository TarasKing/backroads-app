import React from "react";

const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a href={href} className={itemClass} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
