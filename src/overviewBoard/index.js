import { useContext } from "react";
import Layout from "./layout";
import KPICard from "./kpiCard";
import RankingDriver from "./rankDriver";
import { AppContext } from "../AppContext";

function OverviewBoard() {
  const { store, actions } = useContext(AppContext);
  return (
    <Layout>
      {store.activeMenu === "Home" && <KPICard />}
      {store.activeMenu === "Gallery" && <RankingDriver />}
    </Layout>
  );
}

export default OverviewBoard;
