"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import logo_podcast from "../../public/logo_leaderstalkpodcast.png";

import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface INavigationButtons {
  title: string;
  href: string;
}

const navigationButtons: INavigationButtons[] = [
  {
    title: "Menu",
    href: "#",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
  },
];

export default function HeaderNavigation() {
  const [selectedSection, setSelectedSection] = useState<string>(
    navigationButtons[0]?.title || ""
  );

  return (
    <Navbar
      className="bg-slate-900"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
    >
      <NavbarBrand>
        <p className="font-bold text-inherit">Jacob Giron</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navigationButtons
          .map((button) => {
            const isActive = button.title === selectedSection;
            return (
              <NavbarItem key={button.href} isActive={isActive}>
                <Link
                  href={button.href}
                  className="text-white"
                  onClick={() => setSelectedSection(button.title)}
                >
                  {button.title}
                </Link>
              </NavbarItem>
            );
          })
          .filter((_, index) => index < 2)}
        <Image alt="Jacob Giron" src={logo_podcast} className="w-10 h-10" />
        {navigationButtons
          .map((button) => {
            const isActive = button.title === selectedSection;
            return (
              <NavbarItem key={button.href} isActive={isActive}>
                <Link
                  href={button.href}
                  className="text-white"
                  onClick={() => setSelectedSection(button.title)}
                >
                  {button.title}
                </Link>
              </NavbarItem>
            );
          })
          .filter((_, index) => index > 1)}
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <NavbarItem>
          <Link
            href="https://www.youtube.com/@LEADERSTALKPODCAST/featured"
            target="_blank"
          >
            <FaYoutube className="text-gray-400" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="https://twitter.com/jacobgironn  " target="_blank">
            <FaSquareXTwitter className="text-gray-400" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://www.instagram.com/jacobgironn/?next=%2Fnayle_gonzalez_%2F&hl=es-la"
            target="_blank"
          >
            <FaInstagram className="text-gray-400" />
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
