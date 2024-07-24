"use client";

import { RecoilRoot } from "recoil";
import SubChildrens from "./SubChildrens";
import Nav from "./Nav/Nav";
import { NextRouter } from "next/router";
export default function Childrens({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <SubChildrens children={children} />
    </RecoilRoot>
  );
}
