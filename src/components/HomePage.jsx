import React from "react";
import HomeDashboard from "./HomeDashboard";
import HomeNavbar from "./HomeNavbar";

function HomePage() {
  return (
    <div className="relative">
      <HomeNavbar />
      <HomeDashboard />
    </div>
  );
}

export default HomePage;
