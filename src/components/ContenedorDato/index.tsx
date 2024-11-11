// TabContainer/index.tsx
import React, { useState } from "react";
import { TabContainerWrapper, TabButton } from "./styles";
import { TabContainerProps } from "./types";

const TabContainer: React.FC<TabContainerProps> = ({ tabs, onTabSelect }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const handleTabClick = (label: string) => {
    setActiveTab(label);
    onTabSelect(label);
  };

  return (
    <TabContainerWrapper>
      {tabs.map((tab) => (
        <TabButton
          key={tab.label}
          isActive={tab.label === activeTab}
          onClick={() => handleTabClick(tab.label)}
        >
          {tab.label}
        </TabButton>
      ))}
    </TabContainerWrapper>
  );
};

export default TabContainer;
