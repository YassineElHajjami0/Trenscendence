"use client";
import { useState } from "react";
import UpperNav from "./upper-navbar/upper-navbar";
import { RecoilRoot } from "recoil";
import SubChildrens from "./SubChildrens";

export default function Childrens({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <SubChildrens children={children} />
    </RecoilRoot>
  );
}
