import React from "react";
import DashboardHeader from "../../Components/Header/DashboardHeader.tsx";
import StashMasonry from "../../Components/Masonry/Masonry.tsx";
import "./StashDashboard.less";

const StashDashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <StashMasonry />
    </div>
  );
};

export default StashDashboard;
