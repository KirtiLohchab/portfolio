"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=" flex gap-8 ">
      {links.map((link, i) => {
        return (
          <Link
            href={link.path}
            key={i}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            }capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
