import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-20 py-4">
      <Link className="font-semibold text-xl" href={"/"}>
        Platonic Grader
      </Link>
      <div className="space-x-4">
        <Link href={"/login"}>
          <Button variant={"outline"}>Login</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button>Calculate Grades</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
