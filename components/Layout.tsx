import { ScriptProps } from "next/script";
import React, { FC } from "react";
import { useStateContext } from "../context/StateContext";
import Header from "./elements/Header";

const Layout: FC<ScriptProps> = ({ children }) => {
  const testFunc = () => {
    console.log("test");
  };
  return (
    <div className="h-screen w-screen">
      <Header />
      <main className="h-screen w-full">{children}</main>
    </div>
  );
};

export default Layout;
