import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-20 flex justify-between items-center px-20">
      <Link className="font-semibold text-xl text-gray-700" href={"/"}>
        Platonus GPA Wizard
      </Link>
      <ul className="flex gap-x-4 font-semibold">
        <li>Privacy Policy</li>
        <li>Term of Service</li>
      </ul>
    </footer>
  );
};

export default Footer;
