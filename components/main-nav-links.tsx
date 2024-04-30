"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MainNavLinks() {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Tickets", href: "/tickets" },
    { label: "Users", href: "/users" },
  ];

  const currentPath = usePathname();

  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <Link
          className={clsx(
            "navbar-link", 
            currentPath === link.href && "cursor-default text-primary"
          )}
          key={link.label}
          href={link.href}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
