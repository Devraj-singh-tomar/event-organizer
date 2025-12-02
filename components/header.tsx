"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Link from "next/link";
import { Button } from "./ui/button";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import { useState } from "react";
import { BuildingIcon, PlusIcon, TicketIcon } from "lucide-react";

export default function Header() {
  const { isLoading } = useStoreUser();

  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-xl z-20 border-b">
        <div
          className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between
        "
        >
          <Link href={"/"} className="flex items-center">
            <span className="text-xl">EVENT</span>
          </Link>

          {/* <div className="">Search and location</div> */}

          {/* Right Section */}
          <div className="flex items-center gap-2">
            <Button
              size={"sm"}
              variant={"ghost"}
              onClick={() => setShowUpgradeModal((prev) => !prev)}
            >
              Pricing
            </Button>
            <Button size={"sm"} variant={"ghost"} onClick={() => {}}>
              <Link className="cursor-default" href={"explore"}>
                Explore
              </Link>
            </Button>

            <Authenticated>
              <Button
                size={"sm"}
                asChild
                variant={"outline"}
                className="flex gap-1"
              >
                <Link href={"create-event"}>
                  <PlusIcon className="size-4" />
                  <span className="hidden sm:inline">Create Event</span>
                </Link>
              </Button>

              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="My Tickets"
                    labelIcon={<TicketIcon size={16} />}
                    href="/my-tickets"
                  />
                  <UserButton.Link
                    label="My Events"
                    labelIcon={<BuildingIcon size={16} />}
                    href="/my-events"
                  />
                  <UserButton.Action label="manageAccount" />
                </UserButton.MenuItems>
              </UserButton>
            </Authenticated>

            <Unauthenticated>
              <SignInButton mode="modal">
                <Button size={"sm"}>Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>
        </div>
        {/* MOBILE SEARCH AND LOCATION */}

        {/* LOADER */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
        )}
      </nav>

      {/* MODALS */}
    </>
  );
}
