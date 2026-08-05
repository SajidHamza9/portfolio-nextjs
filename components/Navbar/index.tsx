"use client";

import React, { useState } from "react";
import scrollTo from "@/lib/scrollTo";
import {
  Logo,
  Nav,
  BurgerWrapper,
  MenuItem,
  MenuList,
  Burger,
  Button,
} from "./styles";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="logo" onClick={() => scrollTo("#home")} />
      <BurgerWrapper onClick={() => setOpen(!open)}>
        <Burger $open={open} />
      </BurgerWrapper>
      <MenuList onClick={() => setOpen(!open)} $open={open}>
        <MenuItem onClick={() => scrollTo("#home")}>Home</MenuItem>
        <MenuItem onClick={() => scrollTo("#about")}>About</MenuItem>
        <MenuItem onClick={() => scrollTo("#skills")}>Skills</MenuItem>
        <MenuItem onClick={() => scrollTo("#services")}>Services</MenuItem>
        <MenuItem onClick={() => scrollTo("#projects")}>Projects</MenuItem>
        <MenuItem onClick={() => scrollTo("#contact")}>Contact</MenuItem>
        <MenuItem>
          <Button onClick={() => scrollTo("#contact")}>Hire me</Button>
        </MenuItem>
      </MenuList>
    </Nav>
  );
};

export default Navbar;
