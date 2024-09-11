import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../header";
import ScrollProvider from '../../ScrollContext'; // Adjust path as needed

function Container() {

  return (
    <ScrollProvider>
      <div className="flex font-IBM flex-wrap w-full">
        <Header />
        <div className="w-full text-black dark:text-white">
          <Outlet />
        </div>
      </div>
    </ScrollProvider>
  );
}

export default React.memo(Container);
