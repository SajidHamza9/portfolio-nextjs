import styled, { css } from "styled-components";
import { ContainedButton } from "@/components/Intro/styles";

export const Nav = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 120;
  height: ${({ $scrolled }) => ($scrolled ? "64px" : "80px")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  transition: height 0.3s ease, background-color 0.3s ease,
    box-shadow 0.3s ease, border-color 0.3s ease;
  border-bottom: 1px solid transparent;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      background-color: ${theme.bgColor}cc;
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-bottom-color: ${theme.primaryColor}26;
      box-shadow: rgb(0 0 0 / 25%) 0px 8px 24px -8px;
    `}

  @media (max-width: 860px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  z-index: 110;
  &:hover {
    transform: scale(1.08);
  }
`;

export const MenuList = styled.ul<{ $open: boolean }>`
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 860px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(320px, 80%);
    flex-direction: column;
    justify-content: center;
    gap: 2.5rem;
    background-color: ${({ theme }) => theme.bgColor};
    border-left: 1px solid ${({ theme }) => theme.primaryColor}26;
    box-shadow: rgb(0 0 0 / 35%) -8px 0px 30px 0px;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${({ $open }) => ($open ? "0%" : "110%")});
    z-index: 105;
  }
`;

export const NavLink = styled.button<{ $active: boolean }>`
  position: relative;
  background: none;
  border: none;
  padding: 0.25rem 0;
  font-size: 1.1rem;
  font-family: inherit;
  cursor: pointer;
  color: ${({ theme, $active }) =>
    $active ? theme.primaryColor : theme.textColor};
  transition: color 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 100%;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.primaryColor};
    transform: scaleX(${({ $active }) => ($active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.25s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  &:hover::after {
    transform: scaleX(1);
  }
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.primaryColor};
    outline-offset: 4px;
    border-radius: 2px;
  }

  @media (max-width: 860px) {
    font-size: 1.4rem;
  }
`;

export const HireButton = styled(ContainedButton)`
  width: fit-content;
  box-shadow: none;
  font-size: 0.9rem;
  padding: 0.8rem 1.3rem;
  text-transform: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 18px -4px ${({ theme }) => theme.primaryColor};
  }
`;

export const BurgerWrapper = styled.button`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 110;
  width: 44px;
  height: 44px;
  background: none;
  border: none;
  cursor: pointer;
  @media (max-width: 860px) {
    display: flex;
  }
`;

export const Burger = styled.span<{ $open: boolean }>`
  position: relative;
  width: 2rem;
  height: 2px;
  border-radius: 5px;
  background-color: ${({ theme, $open }) =>
    $open ? "transparent" : theme.primaryColor};
  transition: background-color 0.2s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 2rem;
    height: 2px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: transform 0.3s ease-in-out;
  }

  &::before {
    transform: ${({ $open }) =>
      $open ? "translateY(0) rotate(45deg)" : "translateY(-7px)"};
  }
  &::after {
    transform: ${({ $open }) =>
      $open ? "translateY(0) rotate(-45deg)" : "translateY(7px)"};
  }
`;

export const Backdrop = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 860px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 104;
    background-color: rgb(0 0 0 / 50%);
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? "visible" : "hidden")};
    transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;
