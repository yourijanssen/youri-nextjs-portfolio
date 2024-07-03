"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import {useState} from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" />
          </button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* logo */}
          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold" onClick={closeSheet}>
                Youri<span className="text-accent">.</span>
              </h1>
            </Link>
          </div>
          {/* nav */}
          <nav className="flex flex-col justify-center items-center gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${
                        link.path === pathname &&
                        "text-accent border-b-2 border-accent"
                    } text-xl capitalize hover:text-accent transition-all`}
                    onClick={closeSheet}
                >
                  {link.name}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
  );
};

export default MobileNav;
