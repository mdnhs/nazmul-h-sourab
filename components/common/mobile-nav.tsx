import { Norican } from "next/font/google";
import Link from "next/link";
import * as React from "react";

import { SheetClose, SheetDescription, SheetTitle } from "@/components/ui/sheet";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  items: any[];
  children?: React.ReactNode;
}

const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export function MobileNav({ items, children }: MobileNavProps) {
  return (
    <div className="grid gap-6">
      <SheetTitle asChild>
        <SheetClose asChild>
          <Link href="/" className="flex items-center space-x-2">
            <span className={cn(norican.className, "text-2xl")}>
              {siteConfig.authorName}
            </span>
          </Link>
        </SheetClose>
      </SheetTitle>
      <SheetDescription className="sr-only">
        Site navigation menu
      </SheetDescription>
      <nav className="grid grid-flow-row auto-rows-max text-sm">
        {items.map((item, index) => (
          <SheetClose asChild key={index}>
            <Link
              href={item.disabled ? "#" : item.href}
              className={cn(
                "flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline",
                item.disabled && "cursor-not-allowed opacity-60"
              )}
            >
              {item.title}
            </Link>
          </SheetClose>
        ))}
      </nav>
      {children}
    </div>
  );
}
