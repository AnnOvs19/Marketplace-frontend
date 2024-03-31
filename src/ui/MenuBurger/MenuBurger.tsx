"use client";

import React, { FC } from "react";
import { MenuButton, MenuIcon } from "./menuBurger.style";

interface IProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuBurger: FC<IProps> = ({ isOpen, onClick }) => {
  return (
    <MenuButton>
      <MenuIcon isOpen={isOpen} onClick={onClick}>
        <div className="top" />
        <div className="middle" />
        <div className="bottom" />
      </MenuIcon>
    </MenuButton>
  );
};

export default MenuBurger;
