"use client";

import React from "react";
import * as B from "@/styles/baseButtons.style";
import { signOut } from "next-auth/react";

const HeadUser = () => {
  return (
    <B.BaseButton
      style={{ marginTop: "500px" }}
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Выйти из кабинета
    </B.BaseButton>
  );
};

export default HeadUser;
