import React from "react";

function Icon({ image }) {
  return (
    <div className="rounded-xl w-6 h-6">
      <img src={image} alt="Logo" />
    </div>
  );
}

export default Icon;