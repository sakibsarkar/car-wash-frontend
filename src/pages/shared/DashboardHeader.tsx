import { ISideBarState } from "@/components/Layouts/AdminDashboardLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import React from "react";
import { IoMenu } from "react-icons/io5";
import ThemeChanger from "./ThemeChanger";

const DashboardHeader: React.FC<ISideBarState> = ({ setIsOpen }) => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="w-full flex items-center justify-between px-[20px]  py-[10px] border-b-[1px] border-muted shrink-0">
      <img src="/images/logo.png" className="w-[80px] md:flex hidden" />
      <Button
        className="menuBTn flex md:hidden"
        onClick={() => setIsOpen(true)}
        variant={"ghost"}
      >
        <IoMenu />
      </Button>
      <div className="flex items-center justify-end gap-[8px]">
        <ThemeChanger />
        <Avatar>
          <AvatarImage src={user?.image || ""} alt="user avatar" />
          <AvatarFallback>
            <p className="text-muted-foreground uppercase">
              {user?.firstName?.slice(0, 1)}
              {user?.lastName?.slice(0, 1)}
            </p>
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardHeader;
