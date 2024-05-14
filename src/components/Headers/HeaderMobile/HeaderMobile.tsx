"use client";

import React, { FC, useState } from "react";

import * as T from "@/styles/baseText.style";
import * as I from "@/styles/baseIcons.style";
import * as C from "../Headers.style";
import Image from "next/image";
import logo from "@/assets/icons/mainLogo.svg";
import MenuBurger from "@/ui/MenuBurger/MenuBurger";
import Menu from "@/components/Menu/MenuClient";
import { ISeller } from "@/interfaces/users/seller";
import { IClient } from "@/interfaces/users/client";

interface IProps {
  userInfo: ISeller | IClient;
}

const HeaderMobile: FC<IProps> = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleMenuClick() {
    setIsOpen(!isOpen);
    setOpenMenu(!openMenu);
  }

  return (
    <C.HeaderMobileWrapper>
      <C.Header>
        <C.HeaderBox>
          <I.LogoBox>
            <I.LogoIcon>
              <Image
                src={logo}
                alt="The logo of the entire site"
                fill
                style={{
                  objectFit: "cover"
                }}
              />
            </I.LogoIcon>
            <T.LogoText>Marketech</T.LogoText>
          </I.LogoBox>
          <MenuBurger isOpen={isOpen} onClick={handleMenuClick} />
          <Menu
            openMenu={openMenu}
            setOpenMenu={handleMenuClick}
            userInfo={userInfo!}
          />
        </C.HeaderBox>
      </C.Header>
    </C.HeaderMobileWrapper>
  );
};

export default HeaderMobile;
