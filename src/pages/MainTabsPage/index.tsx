import React from "react";
import { Tabs } from "@karrotframe/tabs";
import styled from "@emotion/styled";
import { IoMdHome, IoMdSearch, IoIosStar, IoMdPerson } from "react-icons/io";
import Rate from "./Rate";
import Home from "./Home";
import MyPage from "./MyPage";
import Search from "./Search";

const Tab = styled.div`
  width: 100%;
  height: 100%;
  & > svg {
    margin: 0 auto;
  }
`;

const tabs = [
  {
    key: "TAB_HOME",
    buttonLabel: (
      <Tab>
        <IoMdHome size="22px" />
        <p>home</p>
      </Tab>
    ),
    buttonAriaLabel: "Home",
    render: () => <Home />,
  },
  {
    key: "TAB_Search",
    buttonLabel: (
      <Tab>
        <IoMdSearch size="22px" />
        <p>Search</p>
      </Tab>
    ),
    buttonAriaLabel: "Search",
    render: () => <Search />,
  },
  {
    key: "TAB_Rate",
    buttonLabel: (
      <Tab>
        <IoIosStar size="22px" />
        <p>Rate</p>
      </Tab>
    ),
    buttonAriaLabel: "Rate",
    render: () => <Rate />,
  },
  {
    key: "TAB_MyPage",
    buttonLabel: (
      <Tab>
        <IoMdPerson size="22px" />
        <p>my watcha</p>
      </Tab>
    ),
    buttonAriaLabel: "MyPage",
    render: () => <MyPage />,
  },
];

export default function MainTabsPage() {
  const [activeTabKey, setActiveTabKey] = React.useState("TAB_HOME");
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
  & > :first-child > :first-child {
    bottom: none;
    top: 0;
  }
`;
