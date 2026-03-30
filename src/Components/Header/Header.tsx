import { Flex, Menu, Typography } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
// import "./Header.less";

const { Title } = Typography;

const StashHeader = () => {
  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 12px",
      }}
    >
      {/* <div className="demo-logo" /> */}
      <Flex align={"center"}>
        <Title level={1}>Stash</Title>
        <span>about</span>
      </Flex>
      <span>userName</span>
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

export default StashHeader;
