"use client";

import React, { useEffect, useState } from "react";
import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import { useSession } from "next-auth/react";
import axios from "@/helpers/axios";
import { IClient } from "@/interfaces/users/client";
import { ISeller } from "@/interfaces/users/seller";

const Headers = () => {
  const session = useSession();
  const [userInfo, setUserInfo] = useState<IClient | ISeller>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (session.data?.user.token && count == 1) {
      axios
        .get("/api/users/me?populate=role", {
          headers: {
            Authorization: `Bearer ${session.data?.user.token || ""}`
          }
        })
        .then((res) => setUserInfo(res.data));
    }
  }, [session.data]);

  useEffect(() => {
    setCount(count + 1);
  }, [session.data]);

  return (
    <>
      <HeaderDesktop userInfo={userInfo!} />
      <HeaderMobile userInfo={userInfo!} />
    </>
  );
};

export default Headers;
