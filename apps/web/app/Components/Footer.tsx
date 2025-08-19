import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-2 w-full h-full  rounded-xl">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80"
        alt="Logo 1"
        className="w-1/2 h-24 object-cover rounded-lg bg-gray-100"
      />
      <img
        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=200&q=80"
        alt="Logo 2"
        className="w-1/2 h-24 object-cover rounded-lg bg-gray-100"
      />
    </div>
  );
};

export default Footer;
