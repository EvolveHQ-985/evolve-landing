// Root file for routes

import { Outlet } from "react-router-dom";
// import file for the pages scroll resetter
import AutoResetPagesScroll from "../components/AutoResetPagesScroll/AutoResetPagesScroll";

function Root() {
  return (
    <div className="w-full h-full">
      {/* this will reset the scroll position of the page when a new route is navigated to */}
      <AutoResetPagesScroll />
      <Outlet />
    </div>
  );
}

export default Root;
