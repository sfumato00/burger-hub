"use client";

import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/app/_components/atoms/SearchIcon/search-icon";
import ShoppingCardBadge from "@/app/_components/atoms/ShoppingCartBadge/shopping-card-badge";

export default function GlobalNavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <b className="font-bold text-xl text-primary">BURGER</b>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4 uppercase"
        justify="center"
      >
        <NavbarItem>
          <Link color="foreground" href="#">
            Breakfast
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            <p className="text-primary">Lunch</p>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        <ShoppingCardBadge />
      </NavbarContent>
    </Navbar>
  );
}
