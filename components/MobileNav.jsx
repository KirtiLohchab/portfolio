"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Resume",
    path: "/resume",
  },
  {
    name: "Project",
    path: "/project",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-28 mb-10 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              KIRTI<span className="text-accent"> LOHCHAB</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className=" flex flex-col gap-8 items-center justify-center">
          {links.map((link, i) => {
            return (
              <Link
                href={link.path}
                key={i}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                }capitalize font-medium hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
