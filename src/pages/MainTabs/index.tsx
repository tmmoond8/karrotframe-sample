import React from "react";
import { Tabs } from "@karrotframe/tabs";
import styled from "@emotion/styled";
import Evaluate from "./Evaluate";
import Home from "./Home";
import MyPage from "./MyPage";
import Search from "./Search";

const tabs = [
  {
    key: "TAB_HOME",
    buttonLabel: <div>Home</div>,
    buttonAriaLabel: "Home",
    render: () => <Home />,
  },
  {
    key: "TAB_Search",
    buttonLabel: <div>Search</div>,
    buttonAriaLabel: "Search",
    render: () => <Search />,
  },
  {
    key: "TAB_Evaluate",
    buttonLabel: <div>Evaluate</div>,
    buttonAriaLabel: "Evaluate",
    render: () => <Evaluate />,
  },
  {
    key: "TAB_MyPage",
    buttonLabel: <div>MyPage</div>,
    buttonAriaLabel: "MyPage",
    render: () => <MyPage />,
  },
];

export default function MainTabsPage() {
  const [activeTabKey, setActiveTabKey] = React.useState("Tab_Home");
  return (
    <BottomTabs
      activeTabKey={activeTabKey}
      tabs={tabs}
      onTabChange={(key) => {
        setActiveTabKey(key);
      }}
    />
  );
}

const BottomTabs = styled(Tabs)`
  & > :first-child {
    height: 56px;
    box-shadow: inset 0 calc(var(--kf_tabs_tabBar-borderSize))
      var(--kf_tabs_tabBar-borderColor);
    order: 2;
    margin-top: 0;
    padding-top: 0;
  }
`;
