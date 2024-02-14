import React from "react";
import BrandLogo from "../../assets/logo/Ecomzy-logos_transparent.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = false;
  return (
    <div className="w-full min-h-[5rem] flex items-center justify-between px-5 bg-black shadow-xl ">
      <Link to={"/"}>
      <img
        src={BrandLogo}
        className="h-[90px] w-[90px] scale-[250%]  object-cover ml-16"
      />
      </Link>

      <div className="text-white flex items-center gap-x-4"  >
        <Button variant="link" asChild>
          <Link to={"/about"} className="text-white">
            About
          </Link>
        </Button>

        <Button variant="link" asChild>
          <Link to={"/contact-us"} className="text-white">
            Contact Us
          </Link>
        </Button>
        <div></div>

        {!user && (
          <div className="flex items-center gap-x-4">
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>

            <Button asChild>
              <Link to="/signup">Signup</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
