import type { Route } from "./+types/home";
import {
  Avatar,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarToggle,
} from "flowbite-react";

// config
import { navbarUserData, navbarCss, navbarText, navbarUserOptions } from "@/config/routes/home";

// pages
import LandingPage from "@/pages/LandingPage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Review List" },
    { name: "description", content: "Manage your review" },
  ];
}

export default function Home() {
  return (
    <>
      <Navbar fluid rounded className={navbarCss.main} >
        <NavbarBrand>
          <span className={navbarCss.brandTitle}>{navbarText.title}</span>
        </NavbarBrand>
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar img={navbarUserData.picture} rounded />
            }
          >
            <DropdownHeader>
              <span className={navbarCss.userName}>{navbarUserData.name}</span>
              <span className={navbarCss.userEmail}>{navbarUserData.email}</span>
            </DropdownHeader>
            {
              navbarUserOptions.map(({ name, link }) => (
                <DropdownItem as="a" target="_blank" rel="noopener noreferrer" href={link} >{name}</DropdownItem>
              ))
            }
          </Dropdown>
          <NavbarToggle />
      </Navbar>
      <LandingPage />
    </>
  );
}
