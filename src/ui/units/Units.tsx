"use client";
import { Temp } from "@/constants/consts";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useMemo } from "react";
import { CheckMarkIcon, UnitsImg } from "../../../public/images";
import { useUnits } from "@/hooks/useUnits";
const Units = () => {
  const { tempState, setTempState } = useUnits();
  const tempUnits = useMemo(() => {
    return [
      { id: Temp.C, label: "سلسیوس" },
      { id: Temp.F, label: " فارنهایت" },
    ];
  }, []);

  console.log("temp", tempState);
  return (
    <div>
      <Menu as="div" className="relative inline-block">
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring-1 inset-ring-white/5 hover:bg-white/20">
          <Image src={UnitsImg} alt="units-image" className="mx-1" />
          واحد اندازه گیری
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 size-5 text-gray-400"
          />
        </MenuButton>
        <MenuItems
          transition
          className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white/10 rounded-md bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            {tempUnits.map((temp) => (
              <MenuItem key={temp.id}>
                {({ active, close }) => {
                  const isSelected = temp.id === tempState;
                  return (
                    <a
                      onClick={() => {
                        setTempState(temp.id);
                        close();
                      }}
                      href="#"
                      className={`
                        group flex w-full items-center justify-start rounded-md px-3 py-2 text-sm transition duration-150 ease-in-out text-gray-300
                        ${active ? "bg-white/5" : ""} ${isSelected ? "bg-neutral-600/40 text-white font-bold ring-1 ring-emerald-400/30" : ""}
                        `}
                    >
                      {isSelected ? (
                        <Image
                          src={CheckMarkIcon}
                          alt="checkmark"
                          className="ml-1.5"
                        />
                      ) : (
                        ""
                      )}

                      {temp.label}
                    </a>
                  );
                }}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default Units;
