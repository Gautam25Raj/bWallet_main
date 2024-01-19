"use client";

import { useState } from "react";

import SettingMenuList from "./SettingMenuList";
import GeneralComponent from "./GeneralComponent";
import SocialComponent from "./SocialComponent";

const SettingMenu = () => {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    {
      label: "General",
      value: "general",
    },
    {
      label: "Social",
      value: "social",
    },
  ];

  return (
    <div className="flex">
      <SettingMenuList
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-grow p-4">
        {activeTab === "general" && <GeneralComponent />}
        {activeTab === "social" && <SocialComponent />}
      </div>
    </div>
  );
};

export default SettingMenu;
