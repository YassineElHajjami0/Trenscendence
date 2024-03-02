"use client";
import { useState } from "react";
import UpperNav from "./upper-navbar/upper-navbar";
import { RecoilRoot } from "recoil";

export default function Childrens({ children }: { children: React.ReactNode }) {
  const [first, setfirst] = useState(null);
  return (
    <RecoilRoot>
      <div className="upperNav-children-container">
        <UpperNav />
        {children}
      </div>
    </RecoilRoot>
  );
}
