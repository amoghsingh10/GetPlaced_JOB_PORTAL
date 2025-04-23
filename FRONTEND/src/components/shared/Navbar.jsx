import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../../redux/store";

import { LogOut, User } from "lucide-react";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <h1 className="text-1xl font-bold">
            Get<span className="text-[#8E44AD]">Placed</span>
          </h1>
        </div>
        <div className="flex items-center gap-5">
          <ul className="flex font -medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/Browse">Browse</Link>
            </li>
          </ul>
          {!user ? (
            <div className="flex item-center gap-2">
              <Link to="/login">
                <button
                  style={{ backgroundColor: "#F3F4F6", color: "#8E44AD" }}
                >
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button
                  style={{ backgroundColor: "#F3F4F6", color: "#8E44AD" }}
                >
                  Signup
                </button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="flex gap-4 space-y-2">
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{user?.fullname}</h4>
                    <p className="text-sm text-muted-foreground">
                      {user?.profile?.bio}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600">
                  {user && user.role === "student" && (
                    <div className="flex w-fit items-center gap-2 cursor-pointer">
                      <User />
                      <button
                        style={{ backgroundColor: "#F3F4F6", color: "#8E44AD" }}
                      >
                        <Link to="/profile" style={{color:"#8E44AD"}}>View Profile</Link>
                      </button>
                    </div>
                  )}
                  <LogOut />
                  <button
                    style={{ backgroundColor: "#F3F4F6", color: "#8E44AD" }}
                  >
                    Logout
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
