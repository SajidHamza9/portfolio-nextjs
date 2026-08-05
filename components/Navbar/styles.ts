import styled from "styled-components";
import { ContainedButton } from "@/components/Intro/styles";

export const Logo = styled.img`
  width: 3rem;
  cursor: pointer;
`;

export const BurgerWrapper = styled.div`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
  width: 50px;
  height: 100%;
  cursor: pointer;
  @media (max-width: 860px) {
    display: flex;
  }
`;

export const Burger = styled.div<{ $open: boolean }>`
  width: 2.5rem;
  height: 3px;
  background-color: ${({ theme, $open }) =>
    $open ? "transparent" : theme.primaryColor};
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  transform: translateX(${({ $open }) => (!$open ? "0%" : "-50px")});

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 2.5rem;
    height: 3px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.primaryColor};
    transition: all 0.5s ease-in-out;
  }

  &::before {
    transform: ${({ $open }) =>
      !$open ? "translateY(-11px);" : "rotate(45deg) translate(35px, -35px)"};
  }
  &::after {
    transform: ${({ $open }) =>
      !$open ? "translateY(11px);" : "rotate(-45deg) translate(35px, 35px)"};
  }
`;

export const Nav = styled.nav`
  height: 80px;
  background-color: ${({ theme }) => theme.bgColor};
  box-shadow: rgb(0 0 0 / 20%) 2px 0px 20px 0px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  @media (max-width: 860px) {
    padding: 0 1.5rem;
  }
`;

export const MenuList = styled.ul<{ $open: boolean }>`
  display: flex;
  list-style: none;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 860px) {
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${({ theme }) => theme.bgColor};
    height: 100vh;
    width: 100%;
    flex-direction: column;
    transition: all 0.3s ease-in-out;
    transform: translateX(${({ $open }) => ($open ? "0%" : "100%")});
    justify-content: center;
  }
`;

export const MenuItem = styled.li`
  color: ${({ theme }) => theme.textColor};
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primaryColor};
  }
  &:not(:last-child) {
    margin-right: 2rem;
  }
  @media (max-width: 860px) {
    font-size: 1.3rem;
    &:not(:last-child) {
      margin-bottom: 3rem;
      margin-right: 0;
    }
  }
`;

export const Button = styled(ContainedButton)`
  width: fit-content;
  box-shadow: none;
  font-size: 0.9rem;
  padding: 0.8rem 1.3rem;
  text-transform: none;
`;
