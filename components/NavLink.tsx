'use client';

import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinkProps } from "@/types";

const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({ href, children }) => {
  const path = usePathname();

  return (
    <Link href={href} className={path.startsWith(href) ? 'active' : ''}>
      {children}
    </Link>
  );
};

export default NavLink;
