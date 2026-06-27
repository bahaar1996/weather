"use client";

import Image from "next/image";
import Units from "@/ui/units/Units";
import { Logo } from "../../../public/images";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Image src={Logo} alt="logo" className="h-30 w-30" />
        <Units />
      </div>
      <div className="text-white text-center text-[40px]">وضعیت آب و هوا</div>
    </div>
  );
};

export default Header;
