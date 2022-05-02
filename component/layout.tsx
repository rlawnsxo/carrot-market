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
  console.log(title);
  console.log(cls("pt-16", hasTabBar ? "pb-16" : ""));
  return (
    <div>
      <div className="bg-white w-full max-w-xl text-lg font-medium py-4 fixed text-gray-700 border-b top-0 justify-center flex items-center">
        {title ? <span>{title}</span> : null}
      </div>
      {/* <div className={cls("pt-16", hasTabBar ? "pb-16" : "")}>{children}</div> */}
      <div className="pt-10">{children}</div>
      {hasTabBar ? (
        <nav className="bg-white max-w-xl text-gray-800 border-t fixed bottom-0 pb-10 pt-3 flex justify-between items-center">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
