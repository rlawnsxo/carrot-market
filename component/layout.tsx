import React from "react";
import { cls } from "../libs/utils";

interface LayoutProps {
  title?: string;
  canGoBack?: boolean;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  title,
  canGoBack,
  hasTabBar,
  children,
}: LayoutProps) {
  return (
    <div className="pt-20">
      <div className="bg-white w-full text-lg font-medium pt-4 pb-4 fixed text-gray-700 border-b top-0 justify-center flex items-center">
        {title ? <span>{title}</span> : null}
      </div>
      <div className="pt-16">{children}</div>
      {hasTabBar ? <nav></nav> : null}
    </div>
  );
}
