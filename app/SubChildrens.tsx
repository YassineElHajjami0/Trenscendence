"use client";
import { loggedUser } from "./Atoms/logged";
import UpperNav from "./upper-navbar/upper-navbar";
import { useRecoilValue } from "recoil";
import { useRouter, usePathname } from "next/navigation";

import { useEffect, useRef } from "react";
import Login from "./login/page";

export default function SubChildrens({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = useRecoilValue(loggedUser);

  const router = useRouter();
  const pathname = usePathname();
  console.log("path name----------------->", pathname);

  useEffect(() => {
    if (user === -1) {
      router.push("/login");
    }
    if (user !== -1 && pathname === "/login") router.push("/");
  }, [user, pathname]);

  return (
    <div className="upperNav-children-container">
      <UpperNav />

      {children}
    </div>
  );
}
