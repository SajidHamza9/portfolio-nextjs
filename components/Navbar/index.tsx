"use client";

import { useEffect, useState } from "react";
import scrollTo from "@/lib/scrollTo";
import {
  Logo,
  Nav,
  BurgerWrapper,
  NavLink,
  MenuList,
  Burger,
  HireButton,
  Backdrop,
} from "./styles";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("home");

  // Shrink / add glass background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll and enable Esc-to-close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const handleNavigate = (id: string) => {
    setOpen(false);
    scrollTo(`#${id}`);
  };

  return (
    <>
      <Nav $scrolled={scrolled}>
        <Logo
          src="/images/logo.svg"
          alt="logo"
          onClick={() => handleNavigate("home")}
        />

        <BurgerWrapper
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <Burger $open={open} />
        </BurgerWrapper>

        <MenuList $open={open}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <NavLink
                $active={activeId === item.id}
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <HireButton onClick={() => handleNavigate("contact")}>
              Hire me
            </HireButton>
          </li>
        </MenuList>
      </Nav>

      <Backdrop $open={open} onClick={() => setOpen(false)} />
    </>
  );
};

export default Navbar;
