"use client";

import { useState } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { clsx } from "clsx";
import { Bars3BottomLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ProductGroup } from "@/app/_lib/definitions";

export default function GlobalNavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const productGroups: ProductGroup[] = [
    {
      id: "1",
      name: "Burger",
      products: ["1", "2", "3"],
    },
  ];

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/public"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Home
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
        {isOpen ? (
          <XMarkIcon className="block w-6 text-gray-400" />
        ) : (
          <Bars3BottomLeftIcon className="block w-6 text-gray-400" />
        )}
      </button>

      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-1 px-2 pb-24 pt-5">
          {productGroups.map((g) => {
            return (
              <div key={g.id}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{g.name}</div>
                </div>

                <div className="space-y-1">
                  <GlobalNavItem key={g.id} group={g} close={close} />
                </div>
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  group,
  close,
}: {
  group: ProductGroup;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = group.id === segment;

  return (
    <Link
      onClick={close}
      href={`/${group.id}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        },
      )}
    >
      {group.name}
    </Link>
  );
}
