"use client";
import { useState } from "react";
import UpperNav from "./upper-navbar/upper-navbar";
import { RecoilRoot } from "recoil";
import SubChildrens from "./SubChildrens";
import Nav from "./Nav/Nav";

export default function Childrens({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      <Nav />
      <SubChildrens children={children} />
    </RecoilRoot>
  );
}
