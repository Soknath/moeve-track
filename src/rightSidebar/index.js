import Sidebar from "./sidebar";
import OverviewBoard from "../overviewBoard/index";
import navigationData from "../data/navigation";

function Layout({ children }) {
  console.log("navigationData", navigationData);
  return (
    <div className="flex w-screen bg-transparent">
      <div className="flex w-full">{children}</div>
      <OverviewBoard />
      <Sidebar navigationData={navigationData} />
    </div>
  );
}

export default Layout;
