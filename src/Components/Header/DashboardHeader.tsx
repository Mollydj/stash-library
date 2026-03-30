import { Flex, Menu, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";

const { Title } = Typography;

const items = Array.from({ length: 3 }).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const DashboardHeader = () => {
  return (
    <Header
      style={{
        // position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        marginBottom: "12px",
        // alignItems: "center",
        // justifyContent: "space-between",
        padding: "0 12px",
        backgroundColor: "pink",
      }}
    >
      {/* <div className="demo-logo" /> */}

      <span>
        <Title level={2}>Yarn Stash</Title>
      </span>
      <span>
        <Title level={4}>Sort by Meterage</Title>
      </span>
      {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      /> */}
    </Header>
  );
};

export default DashboardHeader;
