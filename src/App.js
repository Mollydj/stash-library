import { Routes, Route } from "react-router-dom";
import StashDashboard from "./Content/Stash/StashDashboard.tsx";
import SwatchDashboard from "./Content/Swatches/SwatchDashboard.tsx";
import StashHeader from "./Components/Header/Header.tsx";
import StashFooter from "./Components/Footer/Footer.tsx";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
function App() {
  return (
    <>
      <Layout>
        <StashHeader />
        <Content>
          <Routes>
            <Route path="/" element={<StashDashboard />} />
            <Route path="/swatches" element={<SwatchDashboard />} />
          </Routes>
        </Content>
        <StashFooter />
      </Layout>
    </>
  );
}

export default App;
